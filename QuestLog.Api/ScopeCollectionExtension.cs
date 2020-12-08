using Microsoft.Extensions.DependencyInjection;
using QuestLog.Repository;

namespace QuestLog
{
    public static class ScopeCollectionExtension
    {
        public static IServiceCollection AddScopedCollection(this IServiceCollection services)
        {
            // Repositories
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IEntryRepository, EntryRepository>();
            return services;
        }
    }
}
