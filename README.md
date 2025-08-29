1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: 1 -> getElementById work is slelect a single element by its unique (id) name. getElementById return a single HTMLElement.

   2 -> getElementsByClassName work is selects all elements with a given class name. getElementsByClassName return live HTMLCollection like array.

   3 -> querySelector work is selects the first element that matches a css selector.
   querySelector return is single Element.

   4 -> querySelectorAll work is selects all elements that match a css selector.
   querySelectorAll returns static NodeList

2. How do you create and insert a new element into the DOM?
   Answer:> Create a new elemet set it properties and insert it into the DOM at the desired position.

3. What is Event Bubbling and how does it work?

   Answer :> Event Bubbling is when an event starts on a target element and then propagates upward through it parent elements in the DOM.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:> Event Delegation is a technique where a single event listener on a parent element manages events for all its child elements, allowing efficient handling of clicks or other events.including those on dynamically added children.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:> preventDefault() stops the browser's default action, while stopPropagation() stops the event from bubbling or capturing through the DOM.
