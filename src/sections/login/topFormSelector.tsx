import clsx from 'clsx/lite';
import React, { Dispatch, SetStateAction } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
type TopFormSelectorProps = {
  setActiveStep: Dispatch<SetStateAction<'login' | 'signUp' | 'otp'>>;
  activeStep: 'login' | 'signUp' | 'otp';
};
export default function TopFormSelector({
  setActiveStep,
  activeStep,
}: TopFormSelectorProps) {
  return (
    <div
      className={clsx(
        'relative flex min-h-[140px] w-full flex-col items-center',
        'bg-gradient-to-r from-[#6ee2e0] to-[#5257e5] p-6 pb-[94px] shadow-s14',
        'rounded-b-[100%] rounded-t-[90px]',
      )}
    >
      {/* login and signup button  */}
      <div className="flex items-center rounded-full bg-common-white p-2">
        {activeStep === 'otp' ? (
          <div
            onClick={() => setActiveStep('login')}
            className={clsx(
              'rounded-full px-5 py-3 hover:cursor-pointer',
              'bg-common-black text-common-white',
            )}
          >
            کد فعالسازی
          </div>
        ) : (
          <>
            <div
              onClick={() => setActiveStep('login')}
              className={clsx(
                'rounded-full px-5 py-3 hover:cursor-pointer',
                activeStep == 'login' && 'bg-common-black text-common-white',
              )}
            >
              ورود
            </div>
            <div
              onClick={() => setActiveStep('signUp')}
              className={clsx(
                'rounded-full px-5 py-3 hover:cursor-pointer',
                activeStep == 'signUp' && 'bg-common-black text-common-white',
              )}
            >
              ثبت نام
            </div>
          </>
        )}
      </div>

      {/* icon */}
      <div
        className={clsx(
          'size-20 rounded-full bg-[#fff] text-grey-600 opacity-80',
          'absolute bottom-0 translate-y-1/4',
          'flex items-center justify-center',
        )}
      >
        {activeStep === 'login' ? (
          <FaRegUser className="size-10" />
        ) : (
          <div>
            <MdOutlinePersonAddAlt1 className="size-11" />
          </div>
        )}
      </div>
    </div>
  );
}
