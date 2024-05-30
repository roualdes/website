<script>
  export let value="";
</script>

<div class="field">
  <span class="label-text">Chico State email</span>
  <label for="email" class="label">
    <input
      type="email"
      placeholder="fake@csuchico.edu"
      {value}
      class="input input-bordered w-full max-w"
      id="inputEmail"
      name="email"
      pattern="^[a-zA-Z0-09._%+-]+@csuchico.edu"
      required
      />
  </label>
</div>
