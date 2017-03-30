---
layout: page
title: Work
permalink: /work/
---

<!-- <section>
  <div class="heading">
    <h1>Work</h1>
    <h2>Some of the recent projects i've worked on</h2>
  </div>
</section> -->

<section class="work-posts">
  <ul>
    {% for post in site.posts %}
    {% assign mod = forloop.index | modulo: 2 %}
    {% if mod != 0 %} <!-- odd -->
      <li class="work-post-wrapper scroll-animation revealedBox goLeft">
        <div class="work-cover-image revealedBox-content">
          <a href="{{ post.url | relative_url }}">
            <div class="work-title" role="button">{{ post.title | escape }}</div>
            <figure><img src="../assets/img/cover/{{ post.cover-image }}" alt=""></figure>
          </a>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
      {% else %} <!-- even -->
      <li class="work-post-wrapper scroll-animation revealedBox goRight">
        <div class="work-cover-image revealedBox-content">
          <a href="{{ post.url | relative_url }}">
            <div class="work-title" role="button">{{ post.title | escape }}</div>
            <figure><img src="../assets/img/cover/{{ post.cover-image }}" alt=""></figure>
          </a>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>