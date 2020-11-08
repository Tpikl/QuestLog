using System;
using System.Collections.Generic;
using System.Linq;
using QuestLog.Domain;

namespace QuestLog.Repository
{
    public interface IEntryRepository
    {
        Entry Get(Guid Id);
        void Add(Entry entry);
        void Update(Entry entry);
        void Delete(Guid entryId);

        List<Entry> GetByDateRange(DateTime start, DateTime end);
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

        public void Add(Entry entry)
        {
            if (entry.Id == Guid.Empty) entry.Id = Guid.NewGuid();
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


        public List<Entry> GetByDateRange(DateTime start, DateTime end)
            => _context.Entries.Where(x => x.Date >= start && x.Date <= end).ToList();
    }
}