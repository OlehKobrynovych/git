1.
npm install --save-dev webpack-bundle-analyzer
2.
Якщо ви використовуєте Create React App, ви можете додати флаг --stats до команди “build” у файлі package.json і створити новий скрипт “analyze”: 
 
"scripts": { 
    "build": "react-scripts build --stats", 
    "analyze": "webpack-bundle-analyzer build/bundle-stats.json" 
}
3.
Потім виконайте 
npm run build
, а потім 
npm run analyze