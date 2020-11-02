using System;
using System.ComponentModel.DataAnnotations;

namespace QuestLog.Domain
{
    public class DbBase
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
    }
}