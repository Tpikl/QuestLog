using System;
using System.Collections.Generic;
using System.Linq;
using QuestLog.Domain;

namespace QuestLog.Repository
{
    public interface IEntryRepository
    {
        Entry Get(Guid Id);
        List<Entry> GetByUserId(Guid userId);
        void Add(Entry entry);
        void Update(Entry entry);
        void Delete(Guid entryId);
    }

    public class EntryRepository : IEntryRepository
    {
        private QuestLogDbContext _context;

        public EntryRepository(QuestLogDbContext context)
        {
            _context = context;
        }

        public Entry Get(Guid Id)
            => _context.Entries.FirstOrDefault(x => x.Id == Id);

        public List<Entry> GetByUserId(Guid userId)
            => _context.Entries.Where(x => x.UserId == userId).ToList();

        public void Add(Entry entry)
        {
            _context.Entries.Add(entry);
            _context.SaveChanges();
        }

        public void Update(Entry entry)
        {
            _context.Entries.Update(entry);
            _context.SaveChanges();
        }

        public void Delete(Guid entryId)
        {
            _context.Entries.Remove(Get(entryId));
            _context.SaveChanges();
        }
    }
}