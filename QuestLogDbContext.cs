using QuestLog.Domain;
using Microsoft.EntityFrameworkCore;

namespace QuestLog
{
    public class QuestLogDbContext : DbContext
    {
        public QuestLogDbContext(DbContextOptions<QuestLogDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Entry> Entries { get; set; }
    }
}