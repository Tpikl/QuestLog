using System;
using System.Collections.Generic;
using System.Linq;
using QuestLog.Domain;

namespace QuestLog.Repository
{
    public interface IEntryRepository
    {
        Entry GetEntry(Guid Id);
        List<Entry> GetEntriesByUserId(Guid userId);
        void AddEntry(Entry entry);
        void UpdateEntry(Entry entry);
    }

    public class EntryRepository : IEntryRepository
    {
        private QuestLogDbContext _context;

        public EntryRepository(QuestLogDbContext context)
        {
            _context = context;
        }

        public Entry GetEntry(Guid Id)
            => _context.Entries.FirstOrDefault(x => x.Id == Id);

        public List<Entry> GetEntriesByUserId(Guid userId)
            => _context.Entries.Where(x => x.UserId == userId).ToList();

        public void AddEntry(Entry entry)
        {
            _context.Entries.Add(entry);
            _context.SaveChanges();
        }

        public void UpdateEntry(Entry entry)
        {
            _context.Entries.Update(entry);
            _context.SaveChanges();
        }
    }
}