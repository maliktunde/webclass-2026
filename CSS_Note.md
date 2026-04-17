# What is css ?
CSS (Cascading Style Sheets) is the standard style sheet language used to describe the presentation and visual design of web pages written in HTML or XML. While HTML provides the "skeleton" or structure of a page, CSS acts as the "skin" or "clothing," controlling its aesthetics. 

# Core Functionality
CSS allows developers to control a wide range of visual elements across a website, including: 
- Typography: Choosing fonts, sizes, line heights, and text alignment.
- Colors and Backgrounds: Applying colors to text, borders, and backgrounds, or adding gradients and images.
- Layout: Defining the arrangement of elements using modern techniques like CSS Grid (for two-dimensional layouts) and Flexbox (for one-dimensional alignment).
- Responsive Design: Using Media Queries to adapt the layout for different devices, such as smartphones, tablets, and desktops.
- Interactivity and Effects: Creating animations, transitions, and hover effects that improve the user experience

# How CSS Works
CSS operates on a rule-based system. A single rule consists of two main parts: 
1. Selector: Targets the specific HTML element to be styled (e.g., h1 for main headings or .button for a specific class).
2. Declaration Block: Contains one or more declarations inside curly braces {}. Each declaration is a "property: value" pair (e.g., color: blue;).

# Methods of Application
There are three standard ways to apply CSS to a website: 
- External Stylesheets: CSS is written in a separate .css file and linked in the HTML <head>. This is the best practice for maintaining large sites.
- Internal (Embedded) CSS: Styles are placed within a <style> tag in the HTML document's <head>, useful for single-page templates.
- Inline CSS: Styles are applied directly to a specific HTML tag using the style attribute. This is generally avoided for large projects due to maintenance difficulty.

# Why "Cascading"?
The term "Cascading" refers to the specific priority scheme browsers use to resolve conflicts when multiple styles apply to the same element. The browser determines which style "wins" based on factors like importance (e.g., !important), specificity (how precise a selector is), and the order in which rules appear in the code