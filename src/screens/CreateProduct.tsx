import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import InputCategoryList from '../components/InputCategoryList';
import {TextInput, HelperText} from 'react-native-paper';
import * as Yup from 'yup';
import {createProduct} from '../api';
import DataContext from '../contexts/DataContext';
type Props = NativeStackScreenProps<RootStackParamList, 'CreateProduct'>;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Price is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  avatar: Yup.string().required('Image is required'),
});

const CreateProduct = ({navigation}: Props) => {
  const context = useContext(DataContext);
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <Header />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          price: '',
          category: '',
          description: '',
          avatar: '',
          developerEmail: 'cashkl@yandex.com',
        }}
        onSubmit={async values => {
          try {
            await createProduct(values);
            await context.LoadProducts();
            navigation.navigate('Products');
          } catch (error) {
            console.log('Error on create product', error);
          }
        }}>
        {({
          setFieldTouched,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          values,
          touched,
          errors,
        }) => (
          <View style={styles.form}>
            <TextInput
              onChangeText={text => setFieldValue('name', text)}
              onBlur={() => setFieldTouched('name', true)}
              value={values.name}
              style={styles.input}
              label="Name"
              mode="outlined"
              selectionColor="#000"
              underlineColor="#000"
              activeUnderlineColor="#000"
              activeOutlineColor="#000"
              outlineColor="#000"
            />
            {touched.name && (
              <HelperText type="error" visible={!!errors.name}>
                {errors.name}
              </HelperText>
            )}
            <TextInput
              keyboardType="number-pad"
              onChangeText={text => setFieldValue('price', text)}
              onBlur={() => setFieldTouched('price', true)}
              value={values.price}
              style={styles.input}
              label="Price"
              mode="outlined"
              selectionColor="#000"
              underlineColor="#000"
              activeUnderlineColor="#000"
              activeOutlineColor="#000"
              outlineColor="#000"
            />
            {touched.price && (
              <HelperText type="error" visible={!!touched.price}>
                {errors.price}
              </HelperText>
            )}
            <TextInput
              onChangeText={text => setFieldValue('description', text)}
              onBlur={() => setFieldTouched('description', true)}
              value={values.description}
              multiline
              numberOfLines={4}
              style={styles.input}
              label="Description"
              mode="outlined"
              selectionColor="#000"
              underlineColor="#000"
              activeUnderlineColor="#000"
              activeOutlineColor="#000"
              outlineColor="#000"
            />
            {touched.description && (
              <HelperText type="error" visible={!!touched.description}>
                {errors.description}
              </HelperText>
            )}
            <TextInput
              onChangeText={text => setFieldValue('avatar', text)}
              onBlur={() => setFieldTouched('avatar', true)}
              value={values.avatar}
              style={styles.input}
              label="Image Link"
              mode="outlined"
              selectionColor="#000"
              underlineColor="#000"
              activeUnderlineColor="#000"
              activeOutlineColor="#000"
              outlineColor="#000"
            />
            {touched.avatar && (
              <HelperText type="error" visible={!!touched.avatar}>
                {errors.avatar}
              </HelperText>
            )}
            <Text style={styles.selectCategoryText}>
              Selected Category: {values.category}
            </Text>
            <InputCategoryList
              value={values.category}
              handleChange={name => setFieldValue('category', name)}
            />
            {touched.category && (
              <HelperText type="error" visible={!!touched.category}>
                {errors.category}
              </HelperText>
            )}
            <TouchableOpacity
              style={styles.submit}
              disabled={isSubmitting}
              onPress={() => handleSubmit()}>
              <Text style={styles.submitText}>Add Product</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  form: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 0,
    height: 40,
    marginTop: 10,
    overflow: 'hidden',
    flexWrap: 'nowrap',
  },
  selectCategoryText: {
    marginTop: 10,
  },
  submit: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {color: '#fff', fontWeight: 'bold', fontSize: 16},
});
