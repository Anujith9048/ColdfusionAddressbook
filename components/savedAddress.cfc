<cfscript>
    component persistent="true" table="savedAddress" {
        property name="addressId" fieldType="id";
        property name="Title";
        property name="Fname";
        property name="Lname";
        property name="Gender";
        property name="Address";
        property name="Street";
        property name="Pincode";
        property name="Email";
        property name="Phone";
        property name="Image";
        property name="userId";
    }
</cfscript>
