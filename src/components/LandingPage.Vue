<template>
    <div>
        <div class="nose">
            <br>
            <h1>bienvenido al landin g page!</h1>
        </div>
        
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img class="imagen" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6a964da-f73f-431c-a95b-3d4477268790/ddhljyu-7ae3cfb8-17aa-48d1-b15b-d8717fb12903.png/v1/fill/w_1600,h_900,q_80,strp/red_dead_redemption_2___wallpaper_v_2_by_3demerzel_ddhljyu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZDZhOTY0ZGEtZjczZi00MzFjLWE5NWItM2Q0NDc3MjY4NzkwXC9kZGhsanl1LTdhZTNjZmI4LTE3YWEtNDhkMS1iMTViLWQ4NzE3ZmIxMjkwMy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KvQRIwLsMo5itgm0E24LBjF7-qoRFGVrRWYjD6XRwP4">
            <div class="centered">Bienvenido
                <br>
                <a href="/inicio">Ir al inicio</a>
            </div>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div class="footer">
            <p>&copy; 2022 David Website. All rights reserved xd.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<style scoped>

.nose {
    text-align: center;
    margin-bottom: 20px;
}
.imagen {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.centered {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: white;
  }
.content {
    text-align: center;
    margin-bottom: 20px;
}

.footer {
    text-align: center;
    margin-top: 20px;
    color: #888;
}
</style>
