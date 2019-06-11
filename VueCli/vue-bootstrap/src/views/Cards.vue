<template>
  <!-- <div class="mt-5">
    <b-button variant="success">Texto</b-button>
    <b-button variant="info">Texto</b-button>
    <b-button variant="danger">Texto</b-button>
    <b-button variant="primary">Texto</b-button>
    <b-button variant="warning">Texto</b-button>
    <b-button variant="dark">Texto</b-button>

    <b-row >
      <b-col cols="12" md="4" class="mt-5">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur vitae, repellat quasi numquam dicta doloribus nisi tenetur ducimus ipsam quae, voluptatibus non adipisci, obcaecati eos quisquam eligendi nobis impedit.</p>

          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4" class="mt-5">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur vitae, repellat quasi numquam dicta doloribus nisi tenetur ducimus ipsam quae, voluptatibus non adipisci, obcaecati eos quisquam eligendi nobis impedit.</p>

          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4" class="mt-5">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur vitae, repellat quasi numquam dicta doloribus nisi tenetur ducimus ipsam quae, voluptatibus non adipisci, obcaecati eos quisquam eligendi nobis impedit.</p>

          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div> -->
  <div class="sidebar">
  <nav class="sidebar-nav">
    <ul class="nav">
      <li class="nav-title">Nav Title</li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i> Nav item
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i> With badge
          <span class="badge badge-primary">NEW</span>
        </a>
      </li>
      <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
          <i class="nav-icon cui-puzzle"></i> Nav dropdown
        </a>
        <ul class="nav-dropdown-items">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item mt-auto">
        <a class="nav-link nav-link-success" href="https://coreui.io">
          <i class="nav-icon cui-cloud-download"></i> Download CoreUI</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-danger" href="https://coreui.io/pro/">
          <i class="nav-icon cui-layers"></i> Try CoreUI
          <strong>PRO</strong>
        </a>
      </li>
    </ul>
  </nav>
  <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>
</template>

<script>
export default {
  name: "Cards"
};
</script>