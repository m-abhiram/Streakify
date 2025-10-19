import React from 'react'
import "./MostUsed.css";
import {useState} from 'react';
import RenderTemplate from './RenderTemplate';
import { v4 } from 'uuid';

function TemplateContainer() {
  const listOfTemplates = [{templateName : " Full-Body Workout ",tasks : ["Squats – 3 sets of 10 reps","Deadlifts – 3 sets of 8 reps","Bench Press – 3 sets of 8 reps","Pull-Ups – 3 sets of 10 reps" , "Plank – 3 rounds of 45 seconds"],category:"Gym"},
                            {templateName : "Push Day",tasks : ["Bench Press – 4 sets of 8 reps","Overhead Shoulder Press – 3 sets of 10 reps","Dips – 3 sets of 10 reps","Dumbbell Lateral Raises – 3 sets of 12 reps","Triceps Rope Pushdown – 3 sets of 12 reps"],category:"Gym"},                        
                            {templateName : "Leg Day",tasks : ["Barbell Squats – 4 sets of 8 reps","SRomanian Deadlifts – 3 sets of 10 reps","Leg Press – 3 sets of 12 reps","Bulgarian Split Squats – 3 sets of 10 reps","Standing Calf Raises – 3 sets of 15 reps"],category:"Gym"},                      
                            {templateName : "Core & Abs Crusher",tasks : ["Hanging Leg Raises – 3 sets of 12 reps","Russian Twists – 3 sets of 15 reps","Bicycle Crunches – 3 sets of 20 reps","Plank to Shoulder Taps – 3 sets of 10 reps per side","Ab Wheel Rollouts – 3 sets of 10 reps"],category:"Gym"},                      
                            {templateName : "Quick 30-Minute Workout",tasks : ["Jump Rope – 3 minutes warm-up","SDeadlifts – 3 sets of 8 reps","Push-Ups – 3 sets of 15 reps","Dumbbell Shoulder Press – 3 sets of 12 reps","Hanging Leg Raises – 3 sets of 12 reps"],category:"Gym"},                      
                            {templateName : "CP-1",tasks : ["Upsolve (2 problem)","CodeForces(3 problems)","Leetcode(3 problems)","CodeChef(4 Problems)"],category:"Coding"},                        
                            {templateName : "CP-2",tasks : ["Upsolve (1 problem)","CodeForces(3 problems)","InterviewBit(3 problems)","CodeChef(4 Problems)"],category:"Coding"},                       
                            {templateName : "CP-3",tasks : ["Solve 2-3 problems on Leetcode/Codeforces","Learn a new algorithm or concept","Watch a coding tutorial","Refactor an old project for better efficiency"],category:"Coding"},                       
                            {templateName : "Web development Progress",tasks : ["Design UI/UX for a page","Code & test responsiveness","Integrate API or backend features","Debug & optimize performance","Share project update on GitHub"],category:"Coding"},                       
                            {templateName : "Build a Small Project",tasks : ["Define project scope & features","Set up the development environment","Write & test the first feature","Debug & optimize code","Deploy or share progress"],category:"Coding"},                       
                            {templateName : "Daily Learning-1",tasks : ["Read for 30 minutes","Watch an educational video","Take notes on what you learned","Reflect on how you can apply it","Dedicate 1 hour to skill building","Search for resources to learn a new skill"],category:"Personal Development"},                       
                            {templateName : "Daily Learning-2",tasks : ["Research profitable side hustles","Set up a basic plan (costs, time, effort)","Dedicate 1 hour to skill-building","Monitor progress and refine strategy"],category:"Personal Development"},                      
                            {templateName : "Daily Learning-3",tasks : ["Learn 5 new words","Practice speaking for 10 minutes","Write a short paragraph using new words","Revise yesterday’s lessons"],category:"Personal Development"},                       
                            {templateName : "Job Application Tracker",tasks : ["Update resume & LinkedIn","Apply to 3 new companies","Follow up on pending applications","Prepare for upcoming interviews","Practice coding/system design questions"],category:"Personal Development"},                       
                            {templateName : "Technical Blog",tasks : ["Choose a Topic","Research & Outline key headings","Write the First Draft","Edit & Improve","Publish & Share"],category:"Personal Development"},                       
                            {templateName : "Balanced Meal Plainning",tasks : ["Plan meals with protein, fiber, and healthy fats","Include at least 2 servings of vegetables per meal","Limit processed foods and refined sugars","Drink at least 2 liters of water","Meal prep for the week to avoid unhealthy choices"],category:"Diet"},                       
                            {templateName : "Weight Loss Checklist",tasks : ["Eat in a calorie deficit based on daily needs","Avoid sugary drinks and opt for water or herbal tea","Control portion sizes using smaller plates","Track daily food intake using an app or journal"],category:"Diet"},                       
                            {templateName : "Muscle Gain",tasks : ["Consume a protein-rich meal after workouts","Eat every 3-4 hours to maintain energy levels","Include healthy carbs like oats, quinoa, and sweet potatoes","Drink a protein shake if needed to meet daily protein goals","Stay hydrated to support muscle recovery"],category:"Diet"}          
                            ]
  let obj={templateName : "Gym-1",tasks : ["Pushups (20)","Squats(20)","Dumbell(3 sets)"],category:"Gym"}
  function handleTagChange(event){
    setTag(event.target.innerText)
  }
  const [tag,setTag] = useState("Gym")

  return (
    <>
      <div className="templateContainer">
        <div className="tags-div">
          <button className={tag === "Gym" ? "active": "tags"} onClick={handleTagChange}>Gym</button>
          <button className={tag === "Coding" ? "active": "tags"} onClick={handleTagChange}>Coding</button>
          <button className={tag === "Diet" ? "active": "tags"} onClick={handleTagChange}>Diet</button>
          <button className={tag === "Personal Development" ? "active": "tags"} onClick={handleTagChange}>Personal Development</button>
        </div>
        <div className="templates">
          {listOfTemplates.map((template) => (template.category == tag)? <li className='individualTemplate' key={v4()} style={{listStyle : "none"}}><RenderTemplate item = {template}/></li> : "")}
        </div>
      </div>
    </>
  )
}

export default TemplateContainer