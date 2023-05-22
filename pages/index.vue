<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2>Data List</h2>
                        {{ contactState }}
                    </div>
                    <div class="card-body">
            
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Address</td>
                                    <td>Image</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="ctd in contactState" :key="ctd.id">
                                    <td>{{ ctd.name}}</td>
                                    <td>{{ ctd.email}}</td>
                                    <td>{{ ctd.phone}}</td>
                                    <td>{{ ctd.address}}</td>
                                    <td>image</td>
                                    <td>
                                        <NuxtLink class="btn btn-info" to="/">Edit</NuxtLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2>Add Data</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="">Name</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Phone</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Address</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Image</label>
                                <input type="file" class="form-control">
                            </div>
                            <div class="form-group mt-4">
                            
                                <input type="submit" class="btn btn-primary" value="Store">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>

    const {data} = await useFetch("/api/contact/getdata", {
        method: 'GET'
    }) 
    let contactState = useState(()=> [])
    contactState.value = data
    console.log(contactState)


</script>

<style lang="scss" scoped>

</style>