import * as yup from "yup";

export const signUpSchema =yup.object().shape({
  name:yup.string().required("نام ونام خانوادگی الزامی میباشد"),
  phone:yup.string().required('شماره تلفن الزامی میباشد').matches(/^09[0-9]{9}$/,'شماره تلفن صحیح نمی باشد'),
  nationalCode:yup.string().required("کد ملی الزامی میباشد").min(10,"کد ملی باید حداقل 10 رقم باشد "),
  gender:yup.string().oneOf(['1' , '0' , '2']).required("جنسیت الزامی میباشد"),
  type:yup.string().oneOf(['wholesaler' , 'retailer']).required("نوع فروش الزامی میباشد")
})

export type SignUpFormType=yup.InferType <typeof signUpSchema>