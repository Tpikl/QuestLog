using System;
using Microsoft.AspNetCore.Mvc;
using QuestLog.Domain;
using QuestLog.Models;
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

        [HttpPost("Add")]
        public IActionResult Add([FromBody] EntryForm form)
        {
            _repository.AddEntry(new Entry{
                Title = form.Title,
                Description = form.Description,
                Date = DateTime.Parse(form.Date),
                UserId = new Guid(Const.TestUserId)
            });
            return Ok();
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] Entry entry)
        {
            _repository.UpdateEntry(entry);
            return Ok();
        }
    }
}