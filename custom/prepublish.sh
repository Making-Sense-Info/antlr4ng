#!/bin/bash

# Check if the dist folder exists
if [ -d "dist" ]; then
    echo "dist folder found."
    
    # Navigate to the dist folder
    cd dist
    
    # Rename index.cjs
    if [ "index.cjs" ]; then
        mv "index.cjs" "index.js"
        echo "index.cjs renamed in index.js."
    else
        echo "index.cjs not found in dist"
    fi

    # Delete index.mjs
    if [ "index.mjs" ]; then
        rm "index.mjs"
        echo "index.mjs deleted."
    else
        echo "index.mjs not found in dist"
    fi

    # Navigate to the dist folder
    cd ..

    # Replace package.json
    if [ "custom/package.json" ]; then
        cp "custom/package.json" "package.json"
        echo "package.json replaced."
    else
        echo "custom/package.json not found"
    fi

else
    echo "dist folder not found."
fi
