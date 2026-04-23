# TOBAMS GROUP FRONTEND INTERN ASSESSMENT

**Stack:** Next.js + TypeScript + TailwindCSS v4

**Figma:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1287&t=XJ5fvch2q7KwtGe9-0

**GitHub:** https://github.com/dhanie-ellah/Tobams-Group-Assessment

**Live:** https://tobams-group-assessment-henna.vercel.app/

## Getting Started

1. Clone the repo:
```git clone https://github.com/dhanie-ellah/Tobams-Group-Assessment```

2. Install dependencies:
```npm install```

3. Run the development server:
```npm run dev ```

Open http://localhost:3000 with your browser to see the result.

## Design decision
1. Dynamic border-radius via inline style
Tailwind can't generate rounded-tl-[${value}px] at build time when values come from data. I used the style prop so each card matches the exact corner radii from Figma.
2. Font sizes adapted for readability
Some Figma text sizes were too small for mobile or too large for desktop balance. I adjusted a few by 2-4px to keep the layout clean while maintaining the design intent.
3. Used CSS variables for colors
bg-(--primary) instead of hardcoding hex values. This makes theming easier if the brand colors change later.

## AI Usage
I wrote all the code myself. I used Meta AI for debugging when I hit roadblocks mostly to understand error messages or find faster ways to do something I already knew how to do manually. I believe AI is a companion that speeds up workflow, not a replacement for understanding the code.

## Known Issues
No loading states yet for images. If connection is slow, you might see a brief empty space before Next/Image loads.