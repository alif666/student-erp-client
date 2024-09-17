<template>
    <v-container>
        <v-sheet>
            <v-form fast-fail @submit.prevent="submitForm">
                <!-- General Information Fields -->
                <v-text-field v-model="student_name" :rules="student_name_rules"
                    label="1.1 Name of the Student (in Capital Letters):" />
                <v-select v-model="gender" :items="genderLookUp" :rules="gender_rules"
                    label="1.2 Gender: Male (1) / Female (2) / Transgender (3)" />
                <v-text-field v-model="dob" :rules="dob_rules" label="1.3 Date of Birth (DD/MM/YYYY):" />
                <v-text-field v-model="mother_name" label="1.4 Mother's Name:" />
                <v-text-field v-model="father_name" label="1.5 Father's Name:" />
                <v-text-field v-model="guardian_name" label="1.6 Guardian's Name (If Applicable):" />
                <v-text-field v-model="nid_number" label="1.7 NID Number of Student:" />
                <v-text-field v-model="brn_number" label="1.8 BRN Number of Student:" />
                <v-textarea v-model="address" label="1.9 Address:" />
                <v-text-field v-model="pincode" label="1.9(b) Pincode:" />
                <v-text-field v-model="mobile_number"
                    label="1.10(a) Mobile Number (of Student/Parent/Guardian):" />
                <v-text-field v-model="alternate_mobile" label="1.10(b) Alternate Mobile Number:" />
                <v-text-field v-model="email" label="1.11 Contact Email-ID (of Student/Parent/Guardian):" />
                <v-text-field v-model="mother_tongue" label="1.12 Mother Tongue of the Student:" />
                <v-select v-model="social_category" :items="socialCategoryLookUp"
                    label="1.13 Social Category: capitalist farmers (1) / rich peasants (2) / middle peasants (3) / marginal peasants (4) / landless (5)" />

                <!-- Enrollment Details -->
                <v-text-field v-model="academic_year" label="Academic Year: 2022-23" />
                <v-text-field v-model="udise_code" label="UDISE Code of School:" />
                <v-text-field v-model="admission_number" label="2.1 Admission Number in School:" />
                <v-select v-model="stream_opted" :items="streamOptedLookups"
                    label="2.3 Academic Stream Opted (For Higher Secondary): Art (1) / Science (2) / Commerce (3) / Vocational (4) / Other (5)" />

                <!-- File Upload -->
                <v-file-input v-model="student_image_url"
                    label="Upload Student Image"
                    prepend-icon="mdi-camera"
                    variant="filled" />

                <!-- Submit Button -->
                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const student_name = ref('');
        const student_name_rules = [
            value => value?.length >= 3 || 'First name must be at least 3 characters.'
        ];
        const gender = ref(null);
        const genderLookUp = ['Male', 'Female', 'Transgender'];
        const gender_rules = [
            value => value !== null || 'Gender is required.'
        ];
        const dob = ref('');
        const dob_rules = [
            value => !!value || 'Date of Birth is required',
            value => /^\d{2}\/\d{2}\/\d{4}$/.test(value) || 'Enter date in DD/MM/YYYY format'
        ];
        const academic_year = ref('');
        const udise_code = ref('');
        const admission_number = ref('');
        const mother_name = ref('');
        const father_name = ref('');
        const guardian_name = ref('');
        const nid_number = ref('');
        const brn_number = ref('');
        const address = ref('');
        const pincode = ref('');
        const mobile_number = ref('');
        const alternate_mobile = ref('');
        const email = ref('');
        const mother_tongue = ref('');
        const social_category = ref(null);
        const socialCategoryLookUp = [
            'Capitalist Farmers', 'Rich Peasants', 'Middle Peasants', 'Marginal Peasants', 'Landless'
        ];
        const stream_opted = ref(null);
        const streamOptedLookups = ['Art', 'Science', 'Commerce', 'Vocational', 'Others'];
        const student_image_url = ref(null);

        const submitForm = () => {
            if (!student_image_url.value) {
                alert('Please upload an image before submitting.');
                return;
            }
            // form submission logic 
            


            alert('Form submitted successfully!');
        };

        return {
            student_name,
            student_name_rules,
            gender,
            genderLookUp,
            gender_rules,
            dob,
            dob_rules,
            academic_year,
            udise_code,
            admission_number,
            mother_name,
            father_name,
            guardian_name,
            nid_number,
            brn_number,
            address,
            pincode,
            mobile_number,
            alternate_mobile,
            email,
            mother_tongue,
            social_category,
            socialCategoryLookUp,
            stream_opted,
            streamOptedLookups,
            student_image_url,
            submitForm
        };
    }
}
</script>

<style scoped>
.v-btn {
    margin-top: 20px;
}
</style>
