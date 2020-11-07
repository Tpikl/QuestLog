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
        private IEntryRepository _entryRepository;

        public EntryController(IEntryRepository repository)
        {
            _entryRepository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
            => Ok(_entryRepository.Get(id));

        [HttpGet("GetByUserId/{userId}")]
        public IActionResult GetByUserId(Guid userId)
            => Ok(_entryRepository.GetByUserId(userId));

        [HttpPost("Add")]
        public IActionResult Add([FromBody] EntryForm form)
        {
            _entryRepository.Add(new Entry{
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
            _entryRepository.Update(entry);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _entryRepository.Delete(id);
            return Ok();
        }
    }
}