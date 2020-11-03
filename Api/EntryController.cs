using System;
using Microsoft.AspNetCore.Mvc;
using QuestLog.Repository;

namespace QuestLog.Api
{
    [ApiController]
    [Route("/api/[controller]")]
    public class EntryController : ControllerBase
    {
        private IEntryRepository _repository;

        public EntryController(IEntryRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
            => Ok(_repository.GetEntry(id));

        [HttpGet("GetByUserId/{userId}")]
        public IActionResult GetByUserId(Guid userId)
            => Ok(_repository.GetEntriesByUserId(userId));
    }
}