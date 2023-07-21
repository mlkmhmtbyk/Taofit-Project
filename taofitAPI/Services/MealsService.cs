using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using taofitAPI.Data;
using taofitAPI.Data.Models;

namespace taofitAPI.Services
{
    public class MealsService
    {
        private readonly DataContext _context;

        public MealsService(DataContext context)
        {
            _context = context;
        }

        public List<Meal> GetMeals()
        {
            var _meals = _context.Meals.ToList();
            foreach(Meal _meal in _meals){
                _meal.Foods = _context.Foods.Where(f => f.MealId == _meal.MealId).ToList();
            }
            return _meals;
        }

        public List<Meal> GetMealsWithoutFood()
        {            
            return _context.Meals.ToList();
        }

        public void AddMeal(Meal meal)
        {
            var _meal = new Meal()
            {
                MealName = meal.MealName,
                Time = meal.Time
            };
            _context.Meals.Add(_meal);
            _context.SaveChanges();
        }

        public Meal GetMeal(int mealId)
        {
            var _meal = _context.Meals.Find(mealId);
            _meal.Foods = _context.Foods.Where(f => f.MealId == mealId).ToList();
            return _meal;
        }

        public Meal UpdateMeal(int mealId, Meal meal)
        {
            var _meal = _context.Meals.FirstOrDefault(m => m.MealId == mealId);
            if (_meal != null)
            {
                _meal.MealName = meal.MealName;
                _meal.Time = meal.Time;
                _meal.Foods = meal.Foods;

                _context.SaveChanges();
            }

            return _meal;
        }

        public void DeleteMeal(int mealId)
        {
            var _meal = _context.Meals.FirstOrDefault(m => m.MealId == mealId);
            if (_meal != null)
            {
                _context.Meals.Remove(_meal);
                _context.SaveChanges();
            }
        }
    }
}