import React from 'react'


const User = () => {
    return (
        <>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <h1>List of Posts</h1>
                        <ul>
                            <li>Post 1</li>
                            <li>Post 2</li>
                            <li>Post 3</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h1>Create a New Post</h1>
                        <form>
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" id="title" />
                            </div>
                            <div class="form-group">
                                <label for="body">Body:</label>
                                <textarea class="form-control" id="body"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default User