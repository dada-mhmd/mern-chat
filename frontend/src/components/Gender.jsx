const Gender = () => {
  return (
    <div className='flex items-center justify-center bg-slate-800 gap-2 rounded-lg'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text text-slate-300'>Male</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>

      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text text-slate-300'>Female</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>
    </div>
  );
};

export default Gender;
