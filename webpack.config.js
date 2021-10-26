const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angular12Example",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "angular12Example",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          // "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          // "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          // "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          // "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },


          // "@angular/core": { singleton: true},
          // "@angular/common": { singleton: true },
          // "@angular/common/http": { singleton: true },
          // "@angular/router": { singleton: true },
          // "@angular/platform-browser": { singleton: true },
          // "@angular/platform-browser-dynamic": { singleton: true },

          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/platform-browser-dynamic": { singleton: true, strictVersion: true, requiredVersion: '12.2.11' },
          "@angular/animations": {singleton: true, eager: true},
          "rxjs": { singleton: true, strictVersion: true, requiredVersion: '6.6.7' },
          "rxjs/operators": { singleton: true, strictVersion: true, requiredVersion: '6.6.7' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
