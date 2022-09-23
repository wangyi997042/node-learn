const fs = require('fs');
const path = require('path');

module.exports = (dirPath = './public') => {
  return async (ctx, next) => {
    console.log(ctx.url, ctx.url.indexOf("/public"));
    if(ctx.url.indexOf("/public") === 0) {

      const url = path.resolve(__dirname, dirPath);
      const fileBaseName = path.basename(url);
      const filepath = url + ctx.url.replace("/public", "")
      try {
        console.log('filePath', filepath)
        stats = fs.statSync(filepath)
        console.log('filePath', filepath)
        if(stats.isDirectory()) {
          const dir = fs.readdirSync(filepath)
          console.log('dir', dir)
          const ret = ['<div style="padding-left: 20px">']
          dir.forEach(filename => {
            if(filename.indexOf('.') > -1){
              ret.push(`
                <p><a style="color: black" href="${ctx.url}/${filename}">
                ${filename}</a></p>
              `)
            } else {
              ret.push(
                `
                  <p>
                    <a href="${ctx.url}/${filename}">
                      ${filename}
                    </a>
                  </p>
                `
              )
            }
            
          });
          ret.push("</div>")
          ctx.body = ret.join('')
        } else {
          console.log('文件');
          const content = fs.readFileSync(filepath)
          ctx.body = content;
        }
      } catch(e) {
        ctx.body = '404 not found';
      }
    } else {
      await next();
    }
  }
}