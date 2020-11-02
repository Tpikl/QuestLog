using System;

namespace QuestLog.Domain
{
    public class Entry : DbBase
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int EntryType { get; set; }
        public DateTime Date { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public enum EntryType
    {
        Day,
        Week,
        Month,
        Year
    }
}