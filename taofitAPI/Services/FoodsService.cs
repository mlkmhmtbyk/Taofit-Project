using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using taofitAPI.Data;
using taofitAPI.Data.Models;

namespace taofitAPI.Services
{
    public class FoodsService
    {
        private readonly DataContext _context;
        public FoodsService(DataContext context)
        {
            _context = context;
        }

        public List<Food> GetFoods()
        {
            return _context.Foods.ToList();
        }

        public void AddFood(Food food)
        {
            var _food = new Food()
            {
                FoodName = food.FoodName,
                Amount = food.Amount,
                Calory = food.Calory,
                Fat = food.Fat,
                Protein = food.Protein,
                Carbs = food.Carbs,
                MealId = food.MealId,

            };

            _context.Foods.Add(_food);
            _context.SaveChanges();
        }

        public Food GetFood(int foodId)
        {   
            return _context.Foods.Find(foodId);
        }

        public Food UpdateFood(int foodId, Food food)
        {
            var _food = _context.Foods.FirstOrDefault(f => f.FoodId == foodId);
            if(_food != null)
            {
                _food.FoodName = food.FoodName;
                _food.Amount = food.Amount;
                _food.Calory = food.Calory;
                _food.Carbs = food.Carbs;
                _food.Protein = food.Protein;
                _food.Fat = food.Fat;

                _food.MealId = food.MealId;

                _context.SaveChanges();
            }

            return _food;
        }

        public void DeleteFood(int foodId)
        {
            var _food = _context.Foods.FirstOrDefault(f => f.FoodId == foodId);
            if(_food != null)
            {
                _context.Foods.Remove(_food);
                _context.SaveChanges();
            }
        }
    }
}