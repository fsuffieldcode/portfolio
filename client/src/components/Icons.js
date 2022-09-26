import React from 'react'

const NodeIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
        />
      </svg>
      <div>
        <span>Node.js</span>
      </div>
    </div>
  )
}

const ExpressIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 128 128">
        <path
          fill={props.color}
          d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"
        ></path>
        <path
          fill={props.color}
          d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"
        ></path>
      </svg>
      <div>
        <span>Express</span>
      </div>
    </div>
  )
}

const MongoIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"
        />
      </svg>
      <div>
        <span>Mongoose</span>
      </div>
    </div>
  )
}

const GitHubIconNoText = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    </div>
  )
}

const GitHubIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
      <div>
        <span>GitHub</span>
      </div>
    </div>
  )
}

const LinkedInIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    </div>
  )
}

const HtmlIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>

      <div>
        <span>HTML</span>
      </div>
    </div>
  )
}

const JsIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        />
      </svg>

      <div>
        <span>JavaScript</span>
      </div>
    </div>
  )
}

const CssIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>

      <div>
        <span>CSS</span>
      </div>
    </div>
  )
}

const ReactIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"
        />
      </svg>

      <div>
        <span>React</span>
      </div>
    </div>
  )
}

const ReduxIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z"
        />
      </svg>

      <div>
        <span>Redux</span>
      </div>
    </div>
  )
}

const StyledComponentsIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"
        />
      </svg>
      <div>
        <span>Styled Components</span>
      </div>
    </div>
  )
}

const CurvedArrow = props => {
  return (
    <svg viewBox="0 0 365.07 365.07">
      <g>
        <g>
          <path
            fill={props.color}
            d="M44.982,3.271c-3.672,2.448-8.568,3.06-11.628,6.12c-2.448,1.836-2.448,5.508,0,7.344c2.448,1.224,5.508,0,7.956-0.612
			c1.836-0.612,2.448-1.836,2.448-3.672c1.836-1.224,3.672-2.448,4.896-4.284C51.102,5.719,48.042,0.823,44.982,3.271z"
          />
          <path
            fill={props.color}
            d="M20.502,39.379c-3.672,3.06-7.344,6.732-10.404,10.404c-3.06,3.672-6.732,8.568-6.732,12.852
			c0,2.448,3.06,3.672,4.284,1.836c3.06-3.06,3.672-7.956,6.12-11.628c2.448-4.284,5.508-7.344,9.18-11.016
			C24.174,39.991,21.726,38.155,20.502,39.379z"
          />
          <path
            fill={props.color}
            d="M5.814,94.459C4.59,89.563,3.978,84.055,3.978,78.547c0-1.836-3.06-1.836-3.06,0c0,7.344-3.672,22.032,3.672,26.928
			c1.224,1.224,3.06-0.612,3.06-1.836C7.65,100.579,6.426,97.519,5.814,94.459z"
          />
          <path
            fill={props.color}
            d="M40.086,117.715c-9.792,1.224-18.36,3.06-27.54-1.836c-1.224-0.612-1.836,0.612-0.612,1.224
			c9.18,6.732,19.584,9.792,29.988,4.284C44.37,120.163,41.922,117.103,40.086,117.715z"
          />
          <path
            fill={props.color}
            d="M84.15,85.891c-4.896,1.836-8.568,5.508-12.852,8.568c-4.896,3.672-9.18,7.344-13.464,11.628
			c-1.224,1.224,0.612,3.672,2.448,2.448c3.672-3.672,7.956-6.12,12.24-9.18c4.284-3.06,9.792-5.508,13.464-9.18
			C87.822,88.339,86.598,84.667,84.15,85.891z"
          />
          <path
            fill={props.color}
            d="M125.154,41.827c-11.016,4.284-21.42,14.688-29.376,23.256c-1.224,1.836,0.612,3.672,2.448,2.448
			c4.896-4.284,10.404-8.568,15.912-12.24c4.284-3.06,9.18-5.508,12.852-9.18C128.826,43.663,126.99,41.215,125.154,41.827z"
          />
          <path
            fill={props.color}
            d="M179.622,19.183c-11.016-0.612-22.032,3.672-31.824,7.344c-1.836,0.612-1.224,3.06,0.612,3.06
			c10.404-3.06,20.808-4.284,31.212-4.896C182.682,24.079,182.682,19.183,179.622,19.183z"
          />
          <path
            fill={props.color}
            d="M220.626,39.379c-3.06-3.672-7.344-7.344-11.016-10.404c-3.06-2.448-6.732,1.224-4.284,4.284
			c3.061,3.06,6.12,6.732,9.18,10.404c3.061,3.672,6.12,9.18,10.404,12.24c1.836,1.224,4.284-0.612,3.672-3.06
			C228.582,47.947,224.298,43.051,220.626,39.379z"
          />
          <path
            fill={props.color}
            d="M232.254,72.427c0-2.448-4.283-2.448-4.283,0c-0.612,6.12-1.836,11.628-3.061,17.748
			c-1.224,5.508-4.284,11.016-4.284,17.136c0,3.06,4.284,4.284,5.509,1.224C231.643,98.131,232.866,83.443,232.254,72.427z"
          />
          <path
            fill={props.color}
            d="M205.938,134.239c-3.061,4.284-6.12,8.568-9.181,12.852c-2.447,4.284-6.731,8.568-7.344,13.464
			c0,2.448,2.448,3.06,4.284,2.448c4.284-1.836,6.12-7.344,7.956-11.016c3.06-4.896,5.508-10.404,8.568-15.3
			C211.446,133.627,207.774,131.791,205.938,134.239z"
          />
          <path
            fill={props.color}
            d="M175.338,178.915c-5.508,4.896-9.792,9.792-13.464,15.3c-3.672,5.508-8.568,13.464-7.344,20.196
			c0.612,3.06,3.672,3.672,5.508,1.224c3.06-4.284,3.672-10.404,5.508-15.3c2.448-7.344,6.732-14.076,11.628-20.196
			C178.398,179.527,176.562,177.691,175.338,178.915z"
          />
          <path
            fill={props.color}
            d="M140.454,238.891c-5.508,4.896-9.792,10.404-13.464,17.136c-3.672,6.732-7.956,15.301-6.732,22.645
			c0.612,2.448,4.284,2.448,4.896,0.612c3.672-5.509,3.672-12.853,6.12-18.973c2.448-6.731,6.732-13.464,11.628-19.584
			C144.126,239.503,142.29,237.055,140.454,238.891z"
          />
          <path
            fill={props.color}
            d="M139.842,332.526c-4.284-2.447-7.956-4.283-11.016-7.955c-3.06-4.896-4.284-12.24-4.284-17.748c0-1.837-3.06-1.837-3.06,0
			c-1.224,11.628,1.224,31.823,17.136,31.212C141.066,337.423,142.29,333.751,139.842,332.526z"
          />
          <path
            fill={props.color}
            d="M204.714,353.947c-6.731-0.612-13.464,0.611-20.195,0.611c-8.569-0.611-16.525-3.06-23.257-7.956
			c-1.224-0.611-1.836,1.225-1.224,1.836c12.852,9.792,30.601,18.36,46.513,11.628C209.61,358.23,207.774,353.947,204.714,353.947z"
          />
          <path
            fill={props.color}
            d="M256.734,312.331c-4.284,2.448-7.956,6.12-12.852,9.18c-4.284,2.448-9.181,3.672-14.076,4.284
			c-3.061,0.612-3.061,4.896,0,4.896c11.016,0.612,25.092-3.06,31.212-13.464C263.467,314.167,259.794,311.106,256.734,312.331z"
          />
          <path
            fill={props.color}
            d="M281.826,275.61c-7.956,7.956-16.523,16.524-22.032,26.316c-1.836,3.061,2.448,4.896,4.284,2.448
			c6.732-8.568,17.748-14.688,22.645-25.092C287.334,276.223,284.274,273.163,281.826,275.61z"
          />
          <path
            fill={props.color}
            d="M327.727,276.223c-1.836-3.672-6.732-6.12-10.404-7.956c-4.284-1.836-9.18-2.447-14.076-2.447c-3.06,0-3.06,4.283,0,4.283
			c4.284,0,7.956,1.225,11.628,3.061c3.061,1.836,5.509,4.896,8.568,6.731C325.891,281.73,328.95,278.671,327.727,276.223z"
          />
          <path
            fill={props.color}
            d="M364.446,300.091c-8.568-14.076-14.076-29.988-21.42-44.676c-3.672-6.732-13.464-0.612-10.404,6.12
			c5.508,12.239,10.404,25.092,17.748,36.72c-5.508,0.612-11.016,1.224-17.136,1.836c-2.448,0.612-6.732,0.612-8.568,3.061
			l-0.611,0.611c0,0-0.612,0-0.612,0.612c-1.224,1.224,0,3.672,1.224,3.672l0,0c0.612,0.612,1.225,0.612,2.448,0.612
			c3.061,0.611,6.12,0,9.792,0c7.956-0.612,15.3-1.225,23.256-0.612C363.834,308.659,366.282,303.763,364.446,300.091z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

const NpmIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"
        />
      </svg>
      <div>
        <span>NPM</span>
      </div>
    </div>
  )
}

const YarnIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        />
      </svg>
      <div>
        <span>Yarn</span>
      </div>
    </div>
  )
}

const VsCodeIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M17.58.07a1.5 1.5 0 0 0-1.032.392 1.5 1.5 0 0 0-.001 0 .88.88 0 0 0-.05.045L8.53 9.317 3.88 5.504l-.407-.35A1 1 0 0 0 2.45 5a1 1 0 0 0-.012.005l-1.816.75a1 1 0 0 0-.077.035 1 1 0 0 0-.047.028 1 1 0 0 0-.038.022 1 1 0 0 0-.048.034 1 1 0 0 0-.031.024 1 1 0 0 0-.043.036 1 1 0 0 0-.036.033 1 1 0 0 0-.032.035 1 1 0 0 0-.033.038 1 1 0 0 0-.035.044 1 1 0 0 0-.024.034 1 1 0 0 0-.032.051 1 1 0 0 0-.02.034 1 1 0 0 0-.024.05 1 1 0 0 0-.02.045 1 1 0 0 0-.016.044 1 1 0 0 0-.016.047 1 1 0 0 0-.015.055 1 1 0 0 0-.01.04 1 1 0 0 0-.008.054 1 1 0 0 0-.006.05 1 1 0 0 0-.004.083V17.33a1 1 0 0 0 .615.917l1.816.763a1 1 0 0 0 1.034-.163l.408-.35 4.65-3.813 7.968 8.81a1.5 1.5 0 0 0 .072.065 1.5 1.5 0 0 0 .057.05 1.5 1.5 0 0 0 .058.042 1.5 1.5 0 0 0 .063.044 1.5 1.5 0 0 0 .065.038 1.5 1.5 0 0 0 .065.036 1.5 1.5 0 0 0 .068.031 1.5 1.5 0 0 0 .07.03 1.5 1.5 0 0 0 .073.025 1.5 1.5 0 0 0 .066.02 1.5 1.5 0 0 0 .08.02 1.5 1.5 0 0 0 .068.014 1.5 1.5 0 0 0 .075.01 1.5 1.5 0 0 0 .075.007 1.5 1.5 0 0 0 .073.003 1.5 1.5 0 0 0 .077 0 1.5 1.5 0 0 0 .078-.005 1.5 1.5 0 0 0 .067-.007 1.5 1.5 0 0 0 .087-.014 1.5 1.5 0 0 0 .06-.012 1.5 1.5 0 0 0 .08-.022 1.5 1.5 0 0 0 .068-.02 1.5 1.5 0 0 0 .07-.028 1.5 1.5 0 0 0 .089-.037l4.942-2.376a1.5 1.5 0 0 0 .475-.362 1.5 1.5 0 0 0 .09-.112 1.5 1.5 0 0 0 .004-.007 1.5 1.5 0 0 0 .08-.125 1.5 1.5 0 0 0 .062-.12 1.5 1.5 0 0 0 .009-.017 1.5 1.5 0 0 0 .041-.107 1.5 1.5 0 0 0 .014-.037 1.5 1.5 0 0 0 .03-.107 1.5 1.5 0 0 0 .009-.037 1.5 1.5 0 0 0 .017-.1 1.5 1.5 0 0 0 .008-.05 1.5 1.5 0 0 0 .006-.091 1.5 1.5 0 0 0 .004-.079V3.946a1.5 1.5 0 0 0 0-.002 1.5 1.5 0 0 0 0-.032 1.5 1.5 0 0 0-.01-.15 1.5 1.5 0 0 0-.84-1.17L18.203.217a1.5 1.5 0 0 0-.621-.146zm.417 6.852v10.157l-6.195-5.078zM3.005 8.576l3.097 3.425-3.097 3.424z"
        />
      </svg>
      <div>
        <span>VS Code</span>
      </div>
    </div>
  )
}

const GitIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
        />
      </svg>
      <div>
        <span>Git</span>
      </div>
    </div>
  )
}

const PhotoshopIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm4.8 4.48c0-.067.14-.116.224-.116.644-.033 1.588-.05 2.578-.05 2.772 0 3.85 1.52 3.85 3.466 0 2.54-1.842 3.63-4.102 3.63-.38 0-.51-.017-.775-.017v3.842c0 .083-.033.116-.115.116H5.916c-.083 0-.115-.03-.115-.113V5.78zm1.775 5.312c.23.016.412.016.81.016 1.17 0 2.27-.412 2.27-1.996 0-1.27-.786-1.914-2.122-1.914-.396 0-.775.016-.957.033v3.864zm8.607-1.188c-.792 0-1.056.396-1.056.726 0 .363.18.61 1.237 1.155 1.568.76 2.062 1.485 2.062 2.557 0 1.6-1.22 2.46-2.87 2.46-.876 0-1.62-.183-2.05-.43-.065-.033-.08-.082-.08-.165V14.74c0-.1.048-.133.114-.084.624.413 1.352.594 2.012.594.792 0 1.122-.33 1.122-.776 0-.363-.23-.677-1.237-1.205-1.42-.68-2.014-1.37-2.014-2.527 0-1.287 1.006-2.36 2.755-2.36.86 0 1.464.132 1.794.28.082.05.1.132.1.198v1.37c0 .083-.05.133-.15.1-.444-.264-1.1-.43-1.743-.43z"
        />
      </svg>
      <div>
        <span>Photoshop</span>
      </div>
    </div>
  )
}

const HerokuIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"
        />
      </svg>
      <div>
        <span>Heroku</span>
      </div>
    </div>
  )
}

const NetlifyIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"
        />
      </svg>
      <div>
        <span>Netlify</span>
      </div>
    </div>
  )
}

const FigmaIcon = props => {
  return (
    <div>
      <svg role="img" viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z"
        />
      </svg>
      <div>
        <span>Figma</span>
      </div>
    </div>
  )
}

const EmailIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 512 500">
        <g>
          <g>
            <path
              fill={props.color}
              d="M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007
			c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill={props.color}
              d="M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106
			C512,99.077,510.301,92.593,507.496,86.728z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill={props.color}
              d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill={props.color}
              d="M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211
			L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  )
}

const BootstrapIcon = props => {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill={props.color}
          d="M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z"
        />
      </svg>
      <div>
        <span>Bootstrap</span>
      </div>
    </div>
  )
}

export {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  StyledComponentsIcon,
  GitHubIcon,
  GitHubIconNoText,
  GitIcon,
  NpmIcon,
  YarnIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  LinkedInIcon,
  CurvedArrow,
  VsCodeIcon,
  PhotoshopIcon,
  HerokuIcon,
  NetlifyIcon,
  EmailIcon,
  FigmaIcon,
  BootstrapIcon
}
