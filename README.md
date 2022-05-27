# Minify Project
Minifies supported projects, by deleting installed modules, Eg: deletes node_modules folder to make it easier to copy files

<br>

## Supported Project
- Javascript

<br>

## What it does?
#### Consider your main directory that contains all your projects

<table>
  <tr>
    <th> Before running minify.js </th>
    <th> After running minify.js </th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>project-1
          <ul> <li>node_modules</li> <li>index.js</li> <li>otherFiles.ext</li> <li>...</li> <li>package.json</li> </ul>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>project-1
          <ul> <li>index.js</li> <li>otherFiles.ext</li> <li>...</li> <li>package.json</li> </ul>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>project-1
          <ul> <li>node_modules</li> <li>index.js</li> <li>otherFiles.ext</li> <li>...</li> <li>package.json</li> </ul>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>project-1
          <ul> <li>index.js</li> <li>otherFiles.ext</li> <li>...</li> <li>package.json</li> </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

<br>

## How to do it?
#### Place minify.js in the directory that you want to minify

```
projects
│   minify.js   
└─── project-1
│   | index.js
│   | node_modules
│   │   package.json
│   │   otherFiles.ext
│   │   ...
└─── project-2
│   │   index.js
│   │   node_modules
│   │   package.json
│   │   otherFiles.ext
│   │   ...
│   ...
```

`cd` into projects directory
run `node minify.js`
