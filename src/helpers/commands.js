import React from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

const getIp = () => {
  return axios
    .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.ipify.org`)
    .then(res => res.data);
};

const commands = {
  clear: [
    'Welcome to Yeptony portfolio terminal v1.0.0',
    <br key={uniqid()} />,
    new Date().toLocaleString(),
    <br key={uniqid()} />,
    <br key={uniqid()} />,
    'Enter "help" for more informations',
    <br key={uniqid()} />,
    <br key={uniqid()} />
  ],
  help: [
    'whoami: who are you',
    <br key={uniqid()} />,
    'aboutme: learn more about me',
    <br key={uniqid()} />,
    'projects: see all my projects',
    <br key={uniqid()} />,
    'clear: clear the console',
  ],
  whoami: ['Let me think...try again'],
  aboutme: [
    'Hello and welcome!',
    <br key={uniqid()} />,
    'I am a self-taught front-end developper who builds nice and tidy websites. I am passionate about codding and learning about it.'
  ],
  projects: [
    'Yummy template: A responsive HTML5 restaurant template. ',
    <a href="http://www.yeptony-themes.com/yummy/?" target="_blank" rel="noreferrer noopener" key={uniqid()}>
      See more
    </a>,
    <br key={uniqid()} />,
    'Because forms suck: A responsive flexbox form concept. ',
    <a href="https://codepen.io/yeptony/full/woOqvj" target="_blank" rel="noreferrer noopener" key={uniqid()}>
      See more
    </a>,
    <br key={uniqid()} />,
    'CSS only: Plane leaving button. ',
    <a href="https://codepen.io/yeptony/full/ggbxKJ" target="_blank" rel="noreferrer noopener" key={uniqid()}>
      See more
    </a>,
    <br key={uniqid()} />,
    'A modern password generator. ',
    <a href="https://codepen.io/yeptony/full/xmQYVG" target="_blank" rel="noreferrer noopener" key={uniqid()}>
      See more
    </a>
  ]
};

const ip = getIp();

ip.then(res => {
  commands.whoami = `We'll call you ${res}`;
});

const checkCommands = input => {
  if (!(input in commands)) {
    return [
      <span>
        <span className="name">anon@portfolio</span>
        <span>:</span>
        <span className="loc">~/HOME</span>
        <span>$ </span>
        {`${input}`}
      </span>,
      !/^\s*$/g.test(input) && `${input}: command not found`
    ];
  }
  return [
    input !== 'clear' && (
      <span>
        <span className="name">anon@portfolio</span>
        <span>:</span>
        <span className="loc">~/HOME</span>
        <span>$ </span>
        {`${input}`}
      </span>
    ),
    commands[input]
  ];
};

export default checkCommands;
