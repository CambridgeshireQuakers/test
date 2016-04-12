{% for r in site.rooms %}
{% if r.meeting == include.meeting %}

<article class="clearfix" markdown="block" itemscope itemtype="https://schema.org/EventVenue">

## {{ r.title }}

{% if r.images %}

<div class="row">

<div class="col-xs-12 col-sm-4">

{% for img in r.images %}
  {% include image.html src=img.src caption=img.caption alt=img.alt %}
{% endfor %}

</div>

<div class="col-xs-12 col-sm-8" markdown="block">

{{ r.content }}

{% include roomproperties.html room=r %}

{% include roombooking.html room=r %}

</div>

</div>

{% else %}

{{ r.content }}

{% include roomproperties.html room=r %}

{% include roombooking.html room=r %}

{% endif %}

</article>

{% endif %}
{% endfor %}
