import React from "react";

const ICONS = {
  user: (
    <svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
      <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" />
      <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" />
    </svg>
  ),
  password: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32
		C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333
		V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292
		c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51
		c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667
		c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64
		s85.333,38.281,85.333,85.333V192z"
      />
    </svg>
  ),
  geo: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.222 510.222">
      <path d="m406.478 62.747c-83.658-83.658-219.067-83.667-302.734 0-83.656 83.655-83.669 219.067 0 302.734l140.054 140.054c6.249 6.249 16.379 6.248 22.627 0l140.054-140.054c83.655-83.655 83.668-219.066-.001-302.734zm-22.627 280.108-128.74 128.74-128.74-128.74c-70.987-70.987-70.987-186.493 0-257.48 70.988-70.986 186.49-70.988 257.48 0 70.987 70.986 70.987 186.492 0 257.48z" />
      <path d="m255.111 118.42c-52.888 0-95.695 42.798-95.695 95.694 0 52.887 42.8 95.694 95.695 95.694 52.889 0 95.695-42.8 95.695-95.694 0-52.887-42.799-95.694-95.695-95.694zm45.039 140.733c-.613 0-15.694 18.655-45.039 18.655-35.203 0-63.695-28.487-63.695-63.694 0-35.202 28.488-63.694 63.695-63.694 57.185 0 84.671 69.102 45.039 108.733z" />
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon fill="#fff" points="339.392,258.624 512,367.744 512,144.896   " />
      <polygon fill="#fff" points="0,144.896 0,367.744 172.608,258.624   " />
      <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
      <path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856    L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z" />
    </svg>
  ),
  remember: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.826 193.826" >
      <path fill="#fff" d="M191.495,55.511L137.449,1.465c-1.951-1.953-5.119-1.953-7.07,0l-0.229,0.229c-3.314,3.313-5.14,7.72-5.14,12.406  c0,3.019,0.767,5.916,2.192,8.485l-56.55,48.533c-4.328-3.868-9.852-5.985-15.703-5.985c-6.305,0-12.232,2.455-16.689,6.913  l-0.339,0.339c-1.953,1.952-1.953,5.118,0,7.07l32.378,32.378l-31.534,31.533c-0.631,0.649-15.557,16.03-25.37,28.27  c-9.345,11.653-11.193,13.788-11.289,13.898c-1.735,1.976-1.639,4.956,0.218,6.822c0.973,0.977,2.256,1.471,3.543,1.471  c1.173,0,2.349-0.41,3.295-1.237c0.083-0.072,2.169-1.885,13.898-11.289c12.238-9.813,27.619-24.74,28.318-25.421l31.483-31.483  l30.644,30.644c0.976,0.977,2.256,1.465,3.535,1.465s2.56-0.488,3.535-1.465l0.339-0.339c4.458-4.457,6.913-10.385,6.913-16.689  c0-5.851-2.118-11.375-5.985-15.703l48.533-56.55c2.569,1.425,5.466,2.192,8.485,2.192c4.687,0,9.093-1.825,12.406-5.14l0.229-0.229  C193.448,60.629,193.448,57.463,191.495,55.511z" />
    </svg>
  ),
  remove: (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm94.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
    </svg>
  ),
  minus: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
      <path fill="#fff" d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467    c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
    </svg>
  ),
  bookmark: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.065 48.065">
      <path fill="#fff" d="M40.908,0H7.158c-0.553,0-1,0.448-1,1v46.065c0,0.401,0.239,0.763,0.608,0.92c0.369,0.157,0.797,0.078,1.085-0.2  l16.182-15.582l16.182,15.582c0.189,0.183,0.439,0.28,0.693,0.28c0.132,0,0.266-0.026,0.392-0.08c0.369-0.157,0.608-0.52,0.608-0.92  V1C41.908,0.448,41.46,0,40.908,0z M39.908,44.714L24.726,30.095c-0.193-0.187-0.443-0.28-0.693-0.28s-0.5,0.093-0.693,0.28  L8.158,44.714V2h31.75V44.714z" />
    </svg>
  ),
  bookmark_active: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.045 212.045">
      <path fill="#fff" d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954  c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724  c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z" />
    </svg>
  )
};

const Icon = ({ icon, size, width, height }) => {
  const iconStyles = {
    width: size || width,
    height: size || height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="icon-wrapper" style={iconStyles}>
      {ICONS[icon]}
    </div>
  );
};

export default Icon;
