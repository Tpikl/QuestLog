using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace QuestLog.Api
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : ControllerBase
    {
        private QuestLogDbContext _context;

        public UserController(QuestLogDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == new Guid("DCB35393-671D-4AF5-86F0-3F88A62D7FD0"));
            return Ok(user);
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            return Ok(user);
        }
    }
}