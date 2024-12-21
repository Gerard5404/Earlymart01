"use client";
import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";

import { useSession } from 'next-auth/react';
import { db } from '@/lib/firebaseConfig';



const page = () => {
  const { data: session } = useSession()
  const authorMail = session?.user?.email



  const initVal = {
    prodctName: "",
    productImage: null,
    productCategory: "",
    productPrice: "",
    productDescription: ""
  }
  const validationSchema = Yup.object({
    productName: Yup.string().min(5, "must be 5 or more characterrs").required("required"),
    productCategory: Yup.string().min(5, "must be 5 or more characterrs").required("required"),
    productPrice: Yup.number().required("required").positive("price must be a positive number"),
    productDescription: Yup.string().min(5, "must be 5 or more characterrs").required("required")
  })
  const handleSubmit = async (values, { resetForm }) => {
    try {

      //an object to be sent to the database


      const products = {
        //timestamp, authors name , authors email
        name: values.productName,
        category: values.productCategory,
        price: values.productPrice,
        description: values.productDescription,
        authorName: session?.user?.name,
        authorMail: authorMail,
        timestamp: new Date().getTime(),
        isPaid: false


      }
      const docRef = collection(db, "products")
      await addDoc(docRef, products)




      console.log("Form Submitted", values)
      resetForm()
      alert("Product posted successfully")
    } catch (error) {
      console.error('Error posting product')
      alert('Post failed')
    }
  }
  return (
    <main className='min-h-dvh p-3'>
      <div className='max-w-lg mx-auto p-5 rounded-lg shadow-lg bg-white'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Post a Product</h1>
        <Formik
          initialValues={initVal}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          <Form className='space-y-5'>
            {/* product name */}
            <div>
              <label htmlFor="" className='text-sm'>Product Name:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product name"
                name="productName"
                type="text"
              />
              <ErrorMessage
                name='productName'
                component={'p'}
                className='text-sm text-red-500 mt-1'
              />
            </div>
            {/* product image
            <div>
              <label htmlFor="" className='text-sm'>Product Image:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                name="productImage"
                type="file"
                accept="image/*"
                />
              
            </div> */}
            {/* product category */}
            <div>
              <label htmlFor="" className='text-sm'>Product Category:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product category"
                name="productCategory"
                type="text"
              />
              <ErrorMessage
                name="productCategory"
                component={'p'}

                className='text-sm text-red-500 mt-1'
              />
            </div>
            {/* product price */}
            <div>
              <label htmlFor="" className='text-sm'>Product Price:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product price"
                name="productPrice"
                type="number"
              />
            </div>
            <ErrorMessage
              name="productPrice"
              component={'p'}
              className='text-sm text-red-500 mt-1'
            />
            {/* product description */}
            <div>
              <label htmlFor="" className='text-sm'>Product Description:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product desciption"
                name="productDescription"
                type="text"
              />
              <ErrorMessage
                name="productDescription"
                className='text-sm text-red-500 mt-1'
              />
            </div>


            <button
              type="submit"

              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
            >
              Post Product
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default page