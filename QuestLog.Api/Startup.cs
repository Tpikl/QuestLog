using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using QuestLog.Repository;

namespace QuestLog
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // API Controllers
            services.AddControllers();

            // In Memory Database
            services.AddDbContext<QuestLogDbContext>(options => options
                .UseLazyLoadingProxies()
                .UseInMemoryDatabase("QuestLog"));

            // React/Spa
            // services.AddSpaStaticFiles(config => { config.RootPath = "Client/build"; });

            // CORS
            services.AddCors(options => options
                .AddPolicy("QuestLog",
                    builder => {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    }
                )
            );

            services.AddScopedCollection();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.UseCors("QuestLog");
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            // React/Spa
            // app.UseSpa(spa =>
            // {
            //     spa.Options.SourcePath = "Client";

            //     if (env.IsDevelopment())
            //         spa.UseReactDevelopmentServer(npmScript: "start");
            // });
        }
    }
}
