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

        #region Core Methods
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
            => Ok(_entryRepository.Get(id));

        [HttpPost]
        public IActionResult Add([FromBody] EntryForm form)
        {
            _entryRepository.Add(new Entry{
                Title = form.Title,
                Description = form.Description,
                Date = DateTime.Parse(form.Date),
                DisplayArea = form.DisplayArea,
                UserId = new Guid(Const.TestUserId)
            });
            return Ok();
        }

        [HttpPut]
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
        #endregion


        #region Other Methods
        [HttpGet("ByDateRange")]
        public IActionResult ByDateRange(DateTime start, DateTime end)
            => Ok(_entryRepository.GetByDateRange(start, end));
        #endregion
    }
}