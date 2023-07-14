<script lang="ts">
    import { page } from "$app/stores";
</script>


<!-- steppes navigation for current step -->
<nav class="flex justify-center my-6">
    <ul class="steps">
        <a href="/login" class="step step-primary">Sign In</a>
        <!-- subscribe to the current route id $page.route -->
        <a href="/login/username" class="step"
            class:step-primary={$page.route.id?.match(/username|photo/g)}>
                Choose Username
        </a>
        <a href="/login/photo" class="step"
            class:step-primary={$page.route.id?.includes("photo")}>
                Upload Photo
        </a>
    </ul>
</nav>

<!-- slots in layout for the login / signup steps / stepper component -->
<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
    <div class="card-body items-center text-center">
        <slot></slot>
    </div>
</main>