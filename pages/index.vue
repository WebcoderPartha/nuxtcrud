<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2>Data List</h2>
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
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Address</td>
                                    <td>Image</td>
                                    <td>Action</td>
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

</script>

<style lang="scss" scoped>

</style>