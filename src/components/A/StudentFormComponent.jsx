import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function StudentFormComponent() {
  return (
    //         Student unique number
    // Firstname *
    // LastName *
    // Date of Birth *
    // Mother/Father/Gaurien Name *
    // Mother/Father/Gaurien Author number *
    // Mobile number *
    // Communication address *
    // Student Photo
    // Student author Number
    // Class Name *
    // Branch name *
    // Total Fees *
    // Date of Joining *
    // Date of Leaving

    <>
      <div className=''>
        <Formik
          initialValues={{
            studentUniqueNumber: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gaurdianName: '',
            gaurdianAadharNumber: '',
            mobileNumber: '',
            communicationAddress: '',
            studentPhoto: '',
            studentAadharNumber: '',
            className: '',
            branchName: '',
            totalFees: '',
            dateOfJoining: '',
            dateOfLeaving: '',
          }}
          validationSchema={Yup.object({
            studentUniqueNumber: Yup.string().notRequired(),
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            dateOfBirth: Yup.string().required('Enter Date Of Birth'),
            gaurdianName: Yup.string().required('Enter Guardian Name'),
            gaurdianAadharNumber: Yup.string()
              .required('Aadhar is mandatory')
              .matches(
                /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
                '   Enter  correct Format',
              ),
            mobileNumber: Yup.string()
              .required()
              .matches(/^[0-9]{10}$/, '   Enter  correct Format'),
            communicationAddress: Yup.string().required('Enter Address'),
            studentPhoto: Yup.string().required('Select Photo'),
            studentAadharNumber: Yup.string()
              .required('Aadhar is mandatory')
              .matches(
                /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
                '   Enter  correct Format',
              ),
            className: Yup.string().required('Enter Class Name'),
            branchName: Yup.string().required('Enter Branch Name'),
            totalFees: Yup.number().required('enter Fee'),
            dateOfJoining: Yup.string().required('Enter Date Of Joining'),
            dateOfLeaving: Yup.string(),
          })}
          onSubmit={(values) => {
            console.table(values);
          }}
        >
          {() => (
            <>
              <Form className='max-w-xl mx-auto p-6 bg-white shadow rounded'>
                <h3 className='text-center text-xl font-semibold mb-6'>
                  Student Details Form
                </h3>

                <div className='mb-4'>
                  <label
                    htmlFor='studentUniqueNumber'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Student Unique Number
                  </label>
                  <Field
                    type='text'
                    id='studentUniqueNumber'
                    name='studentUniqueNumber'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='studentUniqueNumber'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First Name
                  </label>
                  <Field
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='first name'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='firstName'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last Name
                  </label>
                  <Field
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='last name'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='lastName'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='dateOfBirth'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Date of Birth
                  </label>
                  <Field
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='dateOfBirth'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='gaurdianName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Mother/Father/Guardian Name
                  </label>
                  <Field
                    type='text'
                    id='gaurdianName'
                    name='gaurdianName'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='gaurdianName'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='gaurdianAadharNumber'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Guardian Aadhar Number
                  </label>
                  <Field
                    type='text'
                    id='gaurdianAadharNumber'
                    name='gaurdianAadharNumber'
                    placeholder='xxxx-xxxx-xxxx'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='gaurdianAadharNumber'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='mobileNumber'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Mobile Number
                  </label>
                  <Field
                    type='tel'
                    id='mobileNumber'
                    name='mobileNumber'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='mobileNumber'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='communicationAddress'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Communication Address
                  </label>
                  <Field
                    as='textarea'
                    id='communicationAddress'
                    name='communicationAddress'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='communicationAddress'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='studentPhoto'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Student Photo
                  </label>
                  <Field
                    type='file'
                    id='studentPhoto'
                    name='studentPhoto'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-gray-100'
                  />
                  <ErrorMessage
                    name='studentPhoto'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='studentAadharNumber'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Student Aadhar Number
                  </label>
                  <Field
                    type='text'
                    id='studentAadharNumber'
                    name='studentAadharNumber'
                    placeholder='xxxx-xxxx-xxxx'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='studentAadharNumber'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='className'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Class Name
                  </label>
                  <Field
                    type='text'
                    id='className'
                    name='className'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='className'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='branchName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Branch Name
                  </label>
                  <Field
                    type='text'
                    id='branchName'
                    name='branchName'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='branchName'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='totalFees'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Total Fees
                  </label>
                  <Field
                    type='number'
                    id='totalFees'
                    name='totalFees'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='totalFees'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='dateOfJoining'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Date of Joining
                  </label>
                  <Field
                    type='date'
                    id='dateOfJoining'
                    name='dateOfJoining'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='dateOfJoining'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='dateOfLeaving'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Date of Leaving
                  </label>
                  <Field
                    type='date'
                    id='dateOfLeaving'
                    name='dateOfLeaving'
                    className='mt-1 block w-full border border-gray-300 rounded px-3 py-2'
                  />
                  <ErrorMessage
                    name='dateOfLeaving'
                    component='div'
                    className='text-red-600 text-sm mt-1'
                  />
                </div>

                <button
                  type='submit'
                  className='w-1/4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
                >
                  Submit
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
