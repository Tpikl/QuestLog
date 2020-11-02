using System;
using System.Linq;
using QuestLog.Domain;

namespace QuestLog.Repository
{
    public interface IUserRepository
    {
        User GetUser(Guid Id);
    }

    public class UserRepository : IUserRepository
    {
        private QuestLogDbContext _context;

        public UserRepository(QuestLogDbContext context)
        {
            _context = context;
        }

        public User GetUser(Guid Id)
            => _context.Users.FirstOrDefault(x => x.Id == Id);
    }
}