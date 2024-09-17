import { supabase } from './supabase';

export async function authenticate({ email, password }) {
    console.log('#### authenticate ####');
    console.log(email);
    console.log(password);
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('email')
            .eq('email', email)
            .eq('password', password);
        if (error) throw new Error(error.message);
        console.log('####### data-services.js ########  authenticate #########');
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error authenticating admin:', err);
    }
}

export async function fetchRolesLookups() {
    try {
        const { data, error } = await supabase.from('roles_lookup').select('*');
        if (error) throw new Error(error.message);
        
        return { data };
    } catch (err) {
        console.error('Error fetching roles:', err);
    }
}

export async function fetchUsers() {
    try {
        const { data, error } = await supabase.from('profiles').select('*');
        if (error) throw new Error(error.message);
        return { data };
    } catch (err) {
        console.error('Error fetching staff data:', err);
    }
}

export async function insertNewUser({formData}) {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .insert([{ ...formData.value }]);
        if (error) throw new Error(error.message);
        return { data };
    } catch (err) {
        console.error('Error inserting user:', err);
    }
}

export async function updateUser({ formData, id }) {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .update(formData)
            .eq('id', id);  // Make sure 'id' here matches the field in your database.
            
        if (error) throw new Error(error.message);
        
        return { data };
    } catch (err) {
        console.error('Error updating user:', err);
    }
}


export async function deleteUser({ id }) {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', id);
        if (error) throw new Error(error.message);
        return { data };
    } catch (err) {
        console.error('Error deleting user:', err);
    }
}


export async function fetchNavigations(){
    console.log("############ FETCH NAVIGATIONS ####################");
    try{
        const {data,error} = await supabase.from('navigations').select('*');
        if (error) throw new Error(error.message);
        console.log(data);
        return { data };
    } catch (err) {
        console.error('Error fetching staff data:', err);
    }
}


// Insert new student with image upload
async function insertNewStudent() {
    try {
      // let imageUrl = ''; 
      if (uploadedImage.value) {
        const { data, error } = await supabase.storage
          .from('students -images')
          .upload(`${uploadedImage.value.name}`, uploadedImage.value);
        if (error) throw new Error(error.message);
        // imageUrl = data.path;
      }
      const { error: insertError } = await supabase.from('staff').insert([{ ...newStaff.value, image_url: (supabaseStorageUrl+`/staff-images/${uploadedImage.value.name}`) }]);
      if (insertError) throw new Error(insertError.message);
      insertDialog.value = false;
      fetchStaffs();
    } catch (err) {
      console.error('Error inserting staff:', err);
    }
  }
  