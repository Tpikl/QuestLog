using System;
using QuestLog.Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace QuestLog
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Original
            //CreateHostBuilder(args).Build().Run();

            var host = CreateHostBuilder(args).Build();
            using(var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<QuestLogDbContext>();

                // Create TestUser.
                context.Users.Add(new User
                {
                    Id = new Guid(Const.TestUserId),
                    Username = "TestUser"
                });

                // Create a sample entry.
                context.Entries.Add(new Entry{
                    UserId = new Guid(Const.TestUserId),
                    Title = "Today's Task!",
                    Description = "Do stuff with this.",
                    Date = DateTime.Now,
                    DisplayArea = (int)DisplayArea.day
                });

                context.SaveChanges();
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
