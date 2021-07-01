import React from "react";

interface ISearchAsMoving {
  checked: boolean,
  onChange: (checked: boolean) => void
}

const SearchAsMoving: React.FC<ISearchAsMoving> = ({checked, onChange}) => {
  return (
    <div
      className={
        'absolute z-30 top-4 right-4 bg-white p-3 rounded-lg text-sm shadow-lg'
      }
    >
      <input
        defaultChecked={checked}
        type={'checkbox'}
        className={'rounded mr-2'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      Search when I move the map
    </div>
  )
}

export default SearchAsMoving