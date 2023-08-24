function useBackgroundColor({
  color,
  isText = false,
  addBorder = false,
  returnAll = false,
  addHover = false
}) {
  const Colors = {
    primary: {
      bg: 'bg-primary-700/25',
      text: 'text-primary-400',
      border: 'data-[selected=true]:border-primary-400',
      hover: 'hover:bg-primary-800 hover:scale-105 transition-all'
    },
    danger: {
      bg: 'bg-danger-400/20',
      text: 'text-danger-400',
      border: 'data-[selected=true]:border-danger-400',
      hover: 'hover:bg-danger-800 hover:scale-105 transition-all'
    },
    red: {
      bg: 'bg-red-700/25',
      text: 'text-red-400',
      border: 'data-[selected=true]:border-red-400',
      hover: 'hover:bg-red-800 hover:scale-105 transition-all'
    },
    orange: {
      bg: 'bg-orange-700/25',
      text: 'text-orange-400',
      border: 'data-[selected=true]:border-orange-400',
      hover: 'hover:bg-orange-800 hover:scale-105 transition-all'
    },
    amber: {
      bg: 'bg-amber-700/25',
      text: 'text-amber-400',
      border: 'data-[selected=true]:border-amber-400',
      hover: 'hover:bg-amber-800 hover:scale-105 transition-all'
    },
    yellow: {
      bg: 'bg-yellow-700/25',
      text: 'text-yellow-400',
      border: 'data-[selected=true]:border-yellow-400',
      hover: 'hover:bg-yellow-800 hover:scale-105 transition-all'
    },
    lime: {
      bg: 'bg-lime-700/25',
      text: 'text-lime-400',
      border: 'data-[selected=true]:border-lime-400',
      hover: 'hover:bg-lime-800 hover:scale-105 transition-all'
    },
    green: {
      bg: 'bg-green-700/25',
      text: 'text-green-400',
      border: 'data-[selected=true]:border-green-400',
      hover: 'hover:bg-green-800 hover:scale-105 transition-all'
    },
    emerald: {
      bg: 'bg-emerald-700/25',
      text: 'text-emerald-400',
      border: 'data-[selected=true]:border-emerald-400',
      hover: 'hover:bg-emerald-800 hover:scale-105 transition-all'
    },
    teal: {
      bg: 'bg-teal-700/25',
      text: 'text-teal-400',
      border: 'data-[selected=true]:border-teal-400',
      hover: 'hover:bg-teal-800 hover:scale-105 transition-all'
    },
    cyan: {
      bg: 'bg-cyan-700/25',
      text: 'text-cyan-400',
      border: 'data-[selected=true]:border-cyan-400',
      hover: 'hover:bg-cyan-800 hover:scale-105 transition-all'
    },
    sky: {
      bg: 'bg-sky-700/25',
      text: 'text-sky-400',
      border: 'data-[selected=true]:border-sky-400',
      hover: 'hover:bg-sky-800 hover:scale-105 transition-all'
    },
    blue: {
      bg: 'bg-blue-700/25',
      text: 'text-blue-400',
      border: 'data-[selected=true]:border-blue-400',
      hover: 'hover:bg-blue-800 hover:scale-105 transition-all'
    },
    indigo: {
      bg: 'bg-indigo-700/25',
      text: 'text-indigo-400',
      border: 'data-[selected=true]:border-indigo-400',
      hover: 'hover:bg-indigo-800 hover:scale-105 transition-all'
    },
    violet: {
      bg: 'bg-violet-700/25',
      text: 'text-violet-400',
      border: 'data-[selected=true]:border-violet-400',
      hover: 'hover:bg-violet-800 hover:scale-105 transition-all'
    },
    purple: {
      bg: 'bg-purple-700/25',
      text: 'text-purple-400',
      border: 'data-[selected=true]:border-purple-400',
      hover: 'hover:bg-purple-800 hover:scale-105 transition-all'
    },
    pink: {
      bg: 'bg-pink-700/25',
      text: 'text-pink-400',
      border: 'data-[selected=true]:border-pink-400',
      hover: 'hover:bg-pink-800 hover:scale-105 transition-all'
    },
    rose: {
      bg: 'bg-rose-700/25',
      text: 'text-rose-400',
      border: 'data-[selected=true]:border-rose-400',
      hover: 'hover:bg-rose-800 hover:scale-105 transition-all'
    }
  }

  if (returnAll) {
    return Colors[color]
  }

  if (isText) {
    return Colors[color]['text']
  }

  let result = Colors[color]['bg']
  if (addBorder) {
    result = result + ' ' + Colors[color]['border']
  }
  if (addHover) {
    result = result + ' ' + Colors[color]['hover']
  }
  return result
}

export default useBackgroundColor
