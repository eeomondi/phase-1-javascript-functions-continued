// code your solution here

describe('saturdayFun', () => {
    it('uses the default activity when no arguments are passed', () => {
      expect(saturdayFun()).toBe('This Saturday, I want to roller-skate!');
    });
  
    it('permits the default activity to be overridden', () => {
      expect(saturdayFun('bike')).toBe('This Saturday, I want to bike!');
    });
  });
  
  describe('mondayWork', () => {
    it('uses the default task when no arguments are passed', () => {
      expect(mondayWork()).toBe('This Monday, I will go to the office.');
    });
  
    it('permits the default task to be overridden', () => {
      expect(mondayWork('study')).toBe('This Monday, I will study.');
    });
  });
  
  describe('wrapAdjective', () => {
    it('wraps the name with the given flair and adjective', () => {
      const encouragingPromptFunction = wrapAdjective("awesome", "*");
      expect(encouragingPromptFunction("Alice")).toBe("You are *awesome* Alice!");
      expect(encouragingPromptFunction("Bob")).toBe("You are *awesome* Bob!");
  
      const specialPromptFunction = wrapAdjective("special", "||");
      expect(specialPromptFunction("Alice")).toBe("You are ||special|| Alice!");
      expect(specialPromptFunction("Bob")).toBe("You are ||special|| Bob!");
    });
  });

  function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(adjective) {
    return 'You are ' + adjective.replace(/[^\w]/g, '').trim() + '!';
  }

  const highlightFunction1 = wrapAdjective('*');
console.log(highlightFunction1("a dedicated programmer")); // Output: *a dedicated programmer*

const highlightFunction2 = wrapAdjective('||');
console.log(highlightFunction2("a dedicated programmer")); // Output: ||a dedicated programmer||