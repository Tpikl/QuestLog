using System;
using Microsoft.AspNetCore.Mvc;
using QuestLog.Repository;

namespace QuestLog.Api
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : ControllerBase
    {
        private IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("")]
        public IActionResult Get()
            => Ok(_repository.GetUser(new Guid("DCB35393-671D-4AF5-86F0-3F88A62D7FD0")));

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
            => Ok(_repository.GetUser(id));
    }
}