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
    public class MealsController : ControllerBase
    {
        public MealsService _mealsService;
        public MealsController(MealsService mealsService)
        {
            _mealsService = mealsService;
        }

        [HttpPost("AddMeal")]
        public IActionResult AddMeal([FromBody]Meal meal)
        {
            _mealsService.AddMeal(meal);
            return Ok();
        }

        [HttpGet("GetMeals")]
        public IActionResult GetMeals()
        {
            var Meals = _mealsService.GetMeals();
            return Ok(Meals);
        }

        [HttpGet("GetMealsWithoutFood")]
        public IActionResult GetMealsWithoutFood()
        {
            var Meals = _mealsService.GetMealsWithoutFood();
            return Ok(Meals);
        }

        [HttpGet("GetMeal{mealId}")]
        public IActionResult GetMeal(int mealId)
        {
            var meal = _mealsService.GetMeal(mealId);
            return Ok(meal);
        }

        [HttpPut("UpdateMeal{mealId}")]
        public IActionResult UpdateMeal(int mealId, [FromBody] Meal meal)
        {
            var updatedMeal = _mealsService.UpdateMeal(mealId, meal);
            return Ok(updatedMeal);
        }

        [HttpDelete("DeleteMeal{mealId}")]
        public IActionResult DeleteMeal(int mealId)
        {
            _mealsService.DeleteMeal(mealId);
            return Ok();
        }
    }
}