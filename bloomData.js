/*
  Cal. Eden - Bloom Edition
  © 2026 ふる. All Rights Reserved.
  Unauthorized use, reproduction, or modification is prohibited.
*/

/*=================================================================*/

// ===============================
// Bloom English Difficulty System
/* ===============================
   Level 1: Very simple sentences
   - Single sentence problems
   - Present tense
   - Basic nouns (apple, pen, ball, etc.)
   - Addition and subtraction only
   - Small numbers (0-10)
   - 1-2 characters (A, C)
   - No units
=============================== */
/* ===============================
   Level 2: Medium difficulty sentences
   - Two sentence problems
   - Uses connectors like "and", "gives", "gets"
   - Includes measurable quantities with units (liters, kilograms, sheets, meters, etc.)
   - Addition and subtraction of quantities
   - Multiple characters (A, C)
   - Slightly larger numbers (0-50)
   - Encourages both reading comprehension and calculation
=============================== */
/* ===============================
   Level 3: Harder problems
   - Multiplication problems introduced
   - Sentences with "each" or "every"
   - Groups and multiple items
   - Numbers larger (5-30 per item)
   - No proper names in place of variables for clarity
   - Encourages calculation with repeated addition (multiplication)
=============================== */
/* ===============================
   Level 4: Hard problems with division
   - Introduces division problems
   - Sentences with "shared equally", "per"
   - Multiplication and division
   - Larger numbers (10-30 per item)
   - Numbers divisible for exact division
   - Encourages reading comprehension with units
=============================== */
// ===============================

// bloomData.js（モジュール版から変更）

var bloomData = {
  level1: [
    { op: "add", templates: [
      "{A} has {B} apples. {C} brings {D} apples. How many apples are there now?", 
      "{A} has {B} pens. {C} gives {D} pens. How many pens does {A} have now?",
      "{A} has {B} candies. {C} gives {D} candies to {A}. How many candies now?",
      "{A} has {B} pencils. {C} adds {D} more pencils. How many pencils does {A} have?",
      "{A} has {B} oranges. {C} finds {D} more oranges for {A}. How many oranges total?",
      "{A} has {B} toy cars. {C} gives {D} more cars. How many toy cars does {A} have?",
      "{A} has {B} dogs. {C} brings {D} more dogs. How many dogs does {A} have now?",
      "{A} sees {B} cats in the yard. {C} finds {D} more cats. How many cats are there altogether?",
      "{A} has {B} birds. {C} releases {D} more birds into the cage. How many birds are in the cage now?",
      "{A} has {B} rabbits. {C} brings {D} more rabbits. How many rabbits does {A} have?"
      ] },

    { op: "sub", templates: [
      "{A} has {B} balls. {A} loses {D} balls. How many balls are left?", 
      "{A} has {B} apples. {A} eats {D} apples. How many apples remain?",
      "{A} has {B} candies. {A} gives {D} candies to {C}. How many candies does {A} have now?",
      "{A} has {B} pencils. {D} pencils are lost. How many pencils are left?",
      "{A} has {B} oranges. {A} eats {D} oranges. How many oranges remain?",
      "{A} has {B} toy cars. {A} loses {D} cars. How many toy cars remain?",
      "{A} has {B} dogs. {D} dogs run away. How many dogs are left?",
      "{A} has {B} cats. {A} gives {D} cats to a friend. How many cats remain?",
      "{A} has {B} birds. {D} birds fly away. How many birds are still in the cage?",
      "{A} has {B} rabbits. {D} rabbits escape. How many rabbits are left?"
      ] }
  ],

  level2: [
    { op: "add", templates: [
      "{A} bought {B} liters of milk. {C} gave {A} {D} more liters. How many liters of milk does {A} have now?",
      "{A} has {B} kilograms of rice. {C} gives {A} {D} kilograms more. What is the total amount of rice {A} has?",
      "{A} collected {B} sheets of paper, and {C} added {D} more sheets. How many sheets of paper are there in total?",
      "{A} ran {B} meters in the morning, and {C} ran {D} meters with {A} in the afternoon. How many meters did {A} and {C} run in total?",
      "{A} poured {B} liters of water into a tank. {C} added {D} more liters. How many liters of water are in the tank now?",
      "{A} walked {B} meters to the park. {C} walked {D} meters with {A}. How many meters did they walk in total?",
      "{A} collected {B} stamps. {C} gave {A} {D} more stamps. How many stamps does {A} have now?",
      "{A} wrote {B} pages in the morning. {C} wrote {D} pages in the afternoon. How many pages were written in total?",
      "{A} saved {B} dollars. {C} gave {A} {D} dollars. What is the total amount of money {A} has?",
      "{A} used {B} grams of sugar. {C} added {D} more grams. How many grams of sugar were used?",
      "{A} read for {B} minutes. {C} read for {D} minutes with {A}. How many minutes did they read?",
      "{A} painted {B} meters of a wall. {C} painted {D} meters more. How many meters were painted?",
      "{A} drank {B} milliliters of juice. {C} poured {D} milliliters more. How many milliliters were drunk?",
      "{A} bought {B} tickets. {C} bought {D} tickets too. How many tickets did they buy?",
      "{A} carried {B} bricks. {C} brought {D} more bricks. How many bricks are there now?",
      "{A} received {B} emails. {C} sent {D} more emails. How many emails did {A} receive?",
      "{A} took {B} photos. {C} took {D} photos as well. How many photos were taken?",
      "{A} counted {B} coins. {C} found {D} more coins. How many coins are there now?",
      "{A} cut {B} centimeters of rope. {C} cut {D} centimeters more. How many centimeters were cut?",
      "{A} wrote {B} lines of code. {C} added {D} more lines. How many lines of code are there?",
      "{A} planted {B} seeds. {C} planted {D} seeds nearby. How many seeds were planted?",
      "{A} climbed {B} steps. {C} climbed {D} steps with {A}. How many steps did they climb?",
      "{A} prepared {B} slides for a presentation. {C} prepared {D} slides too. How many slides are ready?",
      "{A} packed {B} boxes. {C} packed {D} more boxes. How many boxes are packed?",
      "{A} folded {B} shirts. {C} folded {D} shirts as well. How many shirts were folded?",
      "{A} washed {B} plates. {C} washed {D} plates after that. How many plates were washed?",
      "{A} solved {B} problems. {C} solved {D} problems too. How many problems were solved?",
      "{A} wrote {B} sentences. {C} wrote {D} more sentences. How many sentences were written?",
      "{A} answered {B} questions. {C} answered {D} questions as well. How many questions were answered?",
      ] 
    },

    { op: "sub", templates: [
      "{A} has {B} liters of juice. {C} drank {D} liters. How many liters of juice are left?",
      "{A} bought {B} kilograms of apples, and sold {D} kilograms to {C}. How many kilograms of apples remain with {A}?",
      "{A} had {B} sheets of paper. {A} used {D} sheets for a project. How many sheets are left?",
      "{A} walked {B} meters yesterday, but {D} meters were in the wrong direction. How many meters did {A} effectively walk?",
      "{A} had {B} liters of fuel. {C} used {D} liters. How many liters of fuel remain?",
      "{A} printed {B} pages. {C} threw away {D} pages. How many pages are left?",
      "{A} owned {B} postcards. {C} took {D} postcards. How many postcards does {A} have now?",
      "{A} prepared {B} cups of tea. {C} drank {D} cups. How many cups remain?",
      "{A} collected {B} shells. {C} lost {D} shells. How many shells are left?",
      "{A} had {B} balloons. {C} popped {D} balloons. How many balloons remain?",
      "{A} stored {B} files. {C} deleted {D} files. How many files are left?",
      "{A} bought {B} candles. {C} used {D} candles. How many candles remain?",
      "{A} wrote {B} notes. {C} erased {D} notes. How many notes are left?",
      "{A} carried {B} bags. {C} dropped {D} bags. How many bags remain?",
      "{A} had {B} cookies. {C} ate {D} cookies. How many cookies are left?",
      "{A} kept {B} cards. {C} gave away {D} cards. How many cards remain?",
      "{A} filled {B} bottles. {C} emptied {D} bottles. How many bottles are still full?",
      "{A} owned {B} hats. {C} lost {D} hats. How many hats remain?",
      "{A} drew {B} pictures. {C} removed {D} pictures. How many pictures remain?",
      "{A} baked {B} pies. {C} sold {D} pies. How many pies are left?",
      "{A} had {B} keys. {C} misplaced {D} keys. How many keys remain?",
      "{A} made {B} sandwiches. {C} ate {D} sandwiches. How many sandwiches remain?",
      "{A} had {B} marbles. {C} lost {D} marbles. How many marbles remain?",
      "{A} prepared {B} envelopes. {C} used {D} envelopes. How many envelopes remain?",
      "{A} owned {B} chairs. {C} removed {D} chairs. How many chairs are left?",
      "{A} kept {B} tools. {C} lost {D} tools. How many tools remain?",
      "{A} saved {B} receipts. {C} threw away {D} receipts. How many receipts are left?",
      "{A} wrote {B} reports. {C} deleted {D} reports. How many reports remain?",
      "{A} had {B} stickers. {C} used {D} stickers. How many stickers are left?",
      ] 
    }
  ],

  level3: [
    {
      op: "mul",
      templates: [
        // Money
        "{B} items cost {A} yen each. How many yen in total?",
        "{B} tickets are {A} yen each. How many yen do they cost?",
        "{B} notebooks cost {A} yen per one. What is the total price?",

        "You buy {B} pens for {A} dollars each. How many dollars do you pay?",
        "{B} books are {A} dollars each. How much do you spend?",
        "You pay {A} dollars per apple and buy {B} apples. Total dollars paid?",

        "One bag is worth {A} euros. What is the value of {B} bags?",
        "A shop charges {A} euros for one hat. How much for {B} hats?",
        "The value of one toy is {A} euros. Total value for {B} toys?",


        // Distance laps
        "One lap is {A} kilometers. You run {B} laps. How many kilometers in total?",
        "A track is {A} meters long. You walk it {B} times. Total distance?",
        "Each round is {A} meters. After {B} rounds, how far did you go?",
        "There is a circular track of {B} meters. A runner goes around it {A} times. How many meters does the runner travel in total?",
        "A swimming lane is {B} meters long. A swimmer swims the lane {A} times. What is the total distance swum?",
        "A robot patrols a corridor that is {B} meters long. It walks back and forth {A} times. How many meters does it walk?",
        "A guard walks around a square yard that measures {B} meters per side. He completes {A} rounds. What is the total distance walked?",
        "A drone flies around a tower. One round is {B} meters. It circles the tower {A} times. What distance does it cover?",
        "A dog runs around a field. One lap is {B} meters. The dog runs {A} laps. How far does it run?",
        "A train moves along a test track of {B} kilometers and repeats this {A} times. What is the total distance traveled?",
        "A delivery robot follows a path of {B} meters repeatedly for {A} cycles. What is the total path length?",
        "A car drives around a block measuring {B} kilometers per lap. It circles the block {A} times. What distance does it travel?",
        "A cyclist rides around a park loop of {B} kilometers for {A} laps. What is the total distance?",


        // Speed × time
        "You move {A} meters every minute. How far in {B} minutes?",
        "A robot walks {A} meters per minute for {B} minutes. Distance?",
        "A car travels {A} meters each minute. How many meters after {B} minutes?",
        "A conveyor belt moves at {B} meters per minute for {A} minutes. How many meters does it move?",
        "A printer feeds paper at {B} centimeters per second for {A} seconds. What length of paper passes through?",
        "A machine pushes a cable forward at {B} meters per minute for {A} minutes. What is the total length pushed?",
        "A robot arm extends {B} centimeters every second for {A} seconds. How far does it extend?",
        "A scanner moves across a surface at {B} millimeters per second for {A} seconds. What distance does it scan?",
        "A boat drifts at {B} meters per minute for {A} minutes. How far does it drift?",
        "A platform slides sideways at {B} centimeters per second for {A} seconds. What distance does it slide?",
        "A camera rail moves at {B} millimeters per second for {A} seconds. What is the travel distance?",
        "A cleaning robot advances {B} meters per minute for {A} minutes. How many meters does it cover?",
        "A lift rises at {B} centimeters per second for {A} seconds. How high does it rise?",


         // Per person / per unit (multiplication)
        "There are {B} people. Each gets {A} cookies. How many cookies are needed?",
        "{B} students receive {A} sheets each. Total sheets?",
        "{B} kids get {A} candies each. How many candies in all?",
        "There are {B} workers. Each worker handles {A} parts. How many parts in total?",
        "{B} students receive {A} pages each. How many pages are needed?",
        "{B} engineers check {A} devices each. Total devices checked?",
        "There are {B} rooms. Each room has {A} lights. How many lights in total?",
        "{B} shelves hold {A} books each. Total books?",
        "{B} trucks carry {A} boxes each. How many boxes altogether?",
        "There are {B} servers. Each server processes {A} requests. Total requests?",
        "{B} technicians install {A} sensors each. How many sensors in total?",
        "{B} tables have {A} chairs each. Total chairs?",
        "{B} offices use {A} computers each. How many computers are used?",
        "There are {B} floors. Each floor uses {A} meters of cable. Total meters of cable?",
        "{B} machines require {A} liters of oil each. Total liters required?",
        "{B} workers lay {A} tiles each. Total tiles laid?",
        "There are {B} teams. Each team writes {A} reports. Total reports?",
        "{B} containers hold {A} kilograms each. Total kilograms?",
        "There are {B} routes. Each route is {A} meters long. Total distance?",
        "{B} printers use {A} sheets each. Total sheets used?",
        "{B} staff members prepare {A} documents each. Total documents?",
        "There are {B} panels. Each panel needs {A} screws. Total screws needed?",
        "{B} units consume {A} watts each. Total power consumption?",


        // Grid
        "There are {A} rows and {B} columns of tiles. How many tiles?",
        "A grid has {A} rows and {B} columns. Total squares?",
        "{A} rows with {B} boxes in each row. How many boxes?",
        "There are {A} rows of tiles. Each row is {B} meters long. What is the total length of all rows?",
        "A warehouse has {A} lines of shelves. Each line stretches {B} meters. What is the total shelf length?",
        "A garden has {A} straight paths. Each path is {B} meters long. What is the total length of the paths?",
        "There are {A} cables laid side by side. Each cable is {B} meters long. What is their combined length?",
        "A factory installs {A} pipes in parallel. Each pipe measures {B} meters. What is the total pipe length?",
        "A field is marked with {A} boundary lines. Each line is {B} meters. What is the total length of the markings?",
        "A stadium has {A} rows of seats. Each row spans {B} meters. What is the total row length?",
        "A parking lot has {A} painted stripes. Each stripe is {B} meters long. What is the total length of the stripes?",
        "A farm lays {A} irrigation hoses. Each hose is {B} meters. What is the total hose length?",
        "A bridge is supported by {A} beams placed in a row. Each beam is {B} meters long. What is the total beam length?",

      ]
    }
  ],


  level4: [
    { op: "div", templates: [
      // Per person / per unit
      "The factory produced {A} parts shared equally among {B} workers. How many parts does each worker handle?",
      "{A} meters of cable are distributed evenly across {B} floors. How many meters per floor?",
      "A warehouse stores {A} boxes arranged equally in {B} sections. How many boxes are in each section?",
      "{A} liters of fuel are divided equally into {B} tanks. How many liters per tank?",
      "{A} kilograms of grain are packed evenly into {B} containers. How many kilograms per container?",
      "{A} sheets of metal are cut and grouped equally into {B} stacks. How many sheets per stack?",
      "{A} devices are installed evenly across {B} rooms. How many devices per room?",
      "{A} meters of pipe are laid equally along {B} routes. How many meters per route?",
      "{A} books are placed evenly onto {B} shelves. How many books per shelf?",
      "{A} chairs are arranged equally in {B} rows. How many chairs per row?",
      "{A} tools are distributed equally among {B} technicians. How many tools per technician?",
      "{A} documents are sorted evenly into {B} folders. How many documents per folder?",
      "{A} batteries are packed equally into {B} boxes. How many batteries per box?",
      "{A} tiles are divided evenly across {B} walls. How many tiles per wall?",
      "{A} meters of fabric are cut equally for {B} uniforms. How many meters per uniform?",
      "{A} parcels are delivered equally by {B} drivers. How many parcels per driver?",
      "{A} cables are bundled equally into {B} coils. How many cables per coil?",
      "{A} meals are prepared equally for {B} guests. How many meals per guest?",
      "{A} tickets are shared equally among {B} counters. How many tickets per counter?",
      "{A} sensors are installed evenly on {B} machines. How many sensors per machine?",

      // Average speed (distance ÷ time)
      "A robot moves {A} meters in {B} seconds. What is its average speed in meters per second?",
      "A train travels {A} meters in {B} seconds. What is the average speed?",
      "A drone flies {A} meters in {B} seconds. How fast is it flying per second?",
      "A machine arm slides {A} meters in {B} seconds. What is its speed per second?",
      "A conveyor belt carries items for {A} meters in {B} seconds. What is its speed?",
      "A runner covers {A} meters in {B} seconds. What is the average speed?",
      "A camera slider moves {A} meters in {B} seconds. What is its speed per second?",
      "A printing head moves {A} meters in {B} seconds. What is its average speed?",
      "A scanner moves along a surface for {A} meters in {B} seconds. What is its speed?",
      "A robotic cart travels {A} meters in {B} seconds. What is the average speed?",

      "A signal travels {A} meters through a cable in {B} seconds. What is the speed?",
      "A water flow travels {A} meters through a pipe in {B} seconds. What is the speed per second?",
      "A package slides {A} meters down a ramp in {B} seconds. What is its speed?",
      "A vehicle moves {A} meters inside a warehouse in {B} seconds. What is the speed?",
      "A lift platform rises {A} meters in {B} seconds. What is the average speed?",
      "A cleaning robot travels {A} meters across the floor in {B} seconds. What is its speed?",
      "A laser head moves {A} meters in {B} seconds. What is the speed per second?",
      "A measuring probe moves {A} meters in {B} seconds. What is the average speed?",
      "A rail cart travels {A} meters in {B} seconds. What is the speed?",
      "A mobile sensor moves {A} meters in {B} seconds. What is the speed per second?",


      // Area density (per square meter)
      "{A} lights are installed across an area of {B} square meters. How many lights per square meter?",
      "{A} tiles cover a floor of {B} square meters. How many tiles per square meter?",
      "{A} sensors are placed over {B} square meters. How many sensors per square meter?",
      "{A} cameras monitor an area of {B} square meters. How many cameras per square meter?",
      "{A} desks are arranged within {B} square meters. How many desks per square meter?",
      "{A} plants grow in a garden of {B} square meters. How many plants per square meter?",
      "{A} solar panels are mounted on {B} square meters of roof. How many panels per square meter?",
      "{A} ceiling lights illuminate {B} square meters. How many lights per square meter?",
      "{A} seats are placed in a hall of {B} square meters. How many seats per square meter?",
      "{A} shelves occupy {B} square meters of wall space. How many shelves per square meter?",
      "{A} posters cover {B} square meters of wall. How many posters per square meter?",
      "{A} workstations are set up across {B} square meters. How many workstations per square meter?",
      "{A} floor panels cover {B} square meters. How many panels per square meter?",
      "{A} pipes run under {B} square meters of ground. How many pipes per square meter?",
      "{A} vents are installed in a ceiling of {B} square meters. How many vents per square meter?",


      // Volume density (per liter)
      "{A} grams of salt are dissolved in {B} liters of water. How many grams per liter?",
      "{A} grams of sugar are mixed into {B} liters of tea. How many grams per liter?",
      "{A} milliliters of dye are added to {B} liters of solution. How many milliliters per liter?",
      "{A} grams of powder are poured into {B} liters of liquid. How many grams per liter?",
      "{A} drops of medicine are diluted in {B} liters of water. How many drops per liter?",
      "{A} milliliters of oil are blended into {B} liters of fuel. How many milliliters per liter?",
      "{A} grams of chemical are dissolved in {B} liters of solvent. How many grams per liter?",
      "{A} grams of minerals are contained in {B} liters of water. How many grams per liter?",
      "{A} milliliters of concentrate are mixed with {B} liters of water. How many milliliters per liter?",
      "{A} grams of fertilizer are spread through {B} liters of nutrient solution. How many grams per liter?",
      "{A} milliliters of flavoring are added to {B} liters of drink. How many milliliters per liter?",
      "{A} grams of pigment are stirred into {B} liters of paint. How many grams per liter?",
      "{A} milliliters of cleaner are poured into {B} liters of water. How many milliliters per liter?",
      "{A} grams of spice are mixed into {B} liters of soup. How many grams per liter?",
      "{A} milliliters of extract are blended into {B} liters of liquid. How many milliliters per liter?",

      ] 
    },

    { op: "mul", templates: [
      // with dummy
      "A building has 4 floors. Each floor contains {A} rooms with {B} chairs. How many chairs?",
      "A museum has 12 wings. Each wing displays {A} frames with {B} photos. Total photos?",
      "A hospital has 5 wards. Each ward has {A} carts with {B} instruments. Total instruments?",
      "A port has 13 docks. Each dock handles {A} containers with {B} labels. Total labels?",
      "A theater has 3 balconies. Each balcony has {A} rows with {B} seats. Total seats?",
      "A farm owns 21 tractors. It stores {A} bins with {B} seeds each. Total seeds?",
      "A garage has 13 vehicles. It keeps {A} racks with {B} tires each. Total tires?",
      "A pilot circles a 15-km route. He flies {A} rounds with {B} checks. Total checks?",
      "A warehouse owns 14 forklifts. It stores {A} shelves with {B} cartons each. Total cartons?",
      "A lab has 25 researchers. There are {A} cabinets with {B} samples each. Total samples?",
      "A company has 17 managers. It operates {A} desks with {B} files each. Total files?",
      "A studio employs 11 artists. There are {A} tables with {B} brushes each. Total brushes?",
      "A bakery opens for 15 hours. Each oven bakes {A} trays with {B} molds. Total trays?",
      "A studio records for 12 hours. Each session uses {A} microphones and {B} stands. How many pieces of equipment?",
      "A kitchen runs for 18 hours. Each chef prepares {A} dishes using {B} pans. Total cookware uses?",
      "A swimmer trains in a 25-meter pool. She swims {A} laps using {B} strokes. Total strokes?",
      "A walker follows a 1-km trail. He walks {A} laps with {B} markers. Total markers?",

      // no dummy
      "A bridge stretching far has {A} pillars. Each pillar supports {B} beams. Total beams?",
      "A satellite orbiting Earth has {A} panels. Each panel uses {B} cells. Total cells?",
      "A drone flying low carries {A} sensors. Each sensor connects to {B} cables. Total cables?",
      "A submarine underwater has {A} chambers. Each chamber contains {B} gauges. Total gauges?",
      "A tower shining at night has {A} levels. Each level uses {B} lamps. Total lamps?",
      "A truck covered in dust carries {A} crates. Each crate has {B} bottles. Total bottles?",
      ] 
    }
  ]
};


