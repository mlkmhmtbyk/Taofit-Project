using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using taofitAPI.Data.Models;
using taofitAPI.Services;

namespace taofitAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodsController : ControllerBase
    {
        public FoodsService _foodsService;
        public FoodsController(FoodsService foodsService){
            _foodsService = foodsService;
        }

        [HttpGet("GetFoods")]
        public IActionResult GetFoods(){
            var allFoods = _foodsService.GetFoods();
            return Ok(allFoods);
        }

        [HttpPost("AddFood")]
        public IActionResult AddFood([FromBody]Food food)
        {
            _foodsService.AddFood(food);
            return Ok();
        }

        [HttpGet("GetFood{foodId}")]
        public IActionResult GetFood(int foodId)
        {
            var food = _foodsService.GetFood(foodId);
            return Ok(food);
        }

        [HttpPut("UpdateFood{foodId}")]
        public IActionResult UpdateFood(int foodId, [FromBody] Food food)
        {
            var updatedFood = _foodsService.UpdateFood(foodId, food);   
            return Ok(updatedFood);
        }

         [HttpDelete("DeleteFood{foodId}")]
        public IActionResult DeleteFood(int foodId)
        {
            _foodsService.DeleteFood(foodId);
            return Ok();
        }
    }
}