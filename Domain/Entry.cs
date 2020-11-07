using System;

namespace QuestLog.Domain
{
    public class Entry : DbBase
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public DateTime? EndDate { get; set; }
        public bool Completed { get; set; }

        public Guid UserId { get; set; }
    }
}